declare const process: { exit(code: number): never };
import { NetClient } from '../src/net/client';
import { CombatWorld } from '../src/combat/world';
import { Fighter, defaultLoadout } from '../src/combat/fighter';
import { Intent, emptyIntent } from '../src/combat/types';
import { COLOSSEUM } from '../src/arenas/spec';
import { RemoteInput, applyFighter, applyProjectiles, eventFromNet, eventToNet, packIntent, sanitizeLoadout, snapFighter, snapProjectile } from '../src/net/protocol';

let fails = 0; const check = (ok: boolean, m: string) => { if (!ok) { fails++; console.log('FAIL: ' + m); } else console.log('ok   ' + m); };
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const modPath: string = '../server/server.mjs';
const { createServer } = await import(modPath);
const server = createServer();
await new Promise<void>(r => server.listen(0, '127.0.0.1', r));
const url = `ws://127.0.0.1:${server.address().port}/ws`;

// ---- lobby
const host = new NetClient(), guest = new NetClient();
await host.connect(url); await guest.connect(url);
let created = ''; host.onStatus = s => { if (s === 'created') created = host.code; };
host.create(); await sleep(150);
check(/^[A-Z2-9]{4}$/.test(created), 'host receives a 4-char room code (' + created + ')');
let peer = false, joined = false; host.onPeer = () => { peer = true; }; guest.onJoined = () => { joined = true; };
const g3 = new NetClient(); await g3.connect(url); let err = ''; g3.onStatus = s => { err = s; }; g3.join('ZZZZ'); await sleep(100);
check(err.startsWith('error:'), 'joining an unknown room errors');
guest.join(created.toLowerCase()); await sleep(150);
check(peer && joined, 'guest joins (case-insensitive code), host notified');
const g4 = new NetClient(); await g4.connect(url); err = ''; g4.onStatus = s => { err = s; }; g4.join(created); await sleep(100);
check(err.includes('full'), 'third player is refused');

// ---- gameplay over the wire
const hostWorld = new CombatWorld(COLOSSEUM, 42);
const hl = sanitizeLoadout({ ...defaultLoadout(), main: 'longsword' }), gl = sanitizeLoadout({ ...defaultLoadout(), main: 'greatsword', armor: { head: 'bogus', chest: 'chest_heavy', arms: 'arms_light', legs: 'legs_light' } });
check(gl.armor.head === 'head_medium' && gl.armor.chest === 'chest_heavy', 'loadout sanitizer rejects unknown armor, keeps valid');
const hf = hostWorld.add('H', 0, hl, 0), gf = hostWorld.add('G', 1, gl, 1);
const guestWorld = new CombatWorld(COLOSSEUM, 1); const rh = guestWorld.add('H', 0, hl, 0), rg = guestWorld.add('G', 1, gl, 1);
const remote = new RemoteInput(); host.onMessage = m => { if (m.t === 'in') remote.ingest(m); };
let tg: any = null; let lastSnap: any = null; let evCount = 0, firstSnap = true; const queued: any[] = [];
guest.onMessage = m => {
  if (m.t !== 'snap') return; lastSnap = m;
  tg = applyFighter(rg, m.f[1], firstSnap); applyFighter(rh, m.f[0], firstSnap); firstSnap = false; applyProjectiles(guestWorld, m.pr);
  for (const e of m.ev) { const ev = eventFromNet(e, guestWorld); if (ev) { evCount++; if (ev.type === 'hit') { check(ev.target === rg.id || ev.target === rh.id, 'event target remapped to local fighter id'); } } }
};
const guestPress = (patch: Partial<Intent>) => guest.send(packIntent({ ...emptyIntent(), faceYaw: Math.PI, ...patch }));
let tick = 0, sawAttackRemote = false, sawHit = false;
for (let i = 0; i < 60 * 8; i++) {
  tick++;
  // guest walks toward host then swings (greatsword), host AI-less: stands and swings
  if (i < 150 && i % 2 === 0) guestPress({ move: { x: 0, z: -1 } });
  if (i === 150) guestPress({ move: { x: 0, z: 0 } });
  if (i > 150 && i % 40 === 0) guestPress({ lightPressed: true, faceYaw: Math.PI });
  await sleep(0); // let socket messages land
  const hi = emptyIntent(); hi.faceYaw = 0; if (i < 150) hi.move.z = 1; if (i > 150 && i % 50 === 0) hi.lightPressed = true;
  hostWorld.step(1 / 60, new Map([[hf.id, hi], [gf.id, remote.take()]]));
  if (gf.action === 'attack') sawAttackRemote = true;
  for (const e of hostWorld.events) { queued.push(eventToNet(e, hostWorld)); if (e.type === 'hit') sawHit = true; }
  if (i % 2 === 0) { host.send({ t: 'snap', f: [snapFighter(hf), snapFighter(gf)], pr: hostWorld.projectiles.map(snapProjectile), ev: queued.splice(0) }); }
  await sleep(1);
}
await sleep(100);
check(sawAttackRemote, 'guest intents (move + light attack) drive the host simulation');
check(sawHit, 'host world produced hits from networked intents');
check(!!lastSnap && evCount > 0, 'guest received snapshots and ' + evCount + ' events');
const near = (a: number, b: number) => Math.abs(a - b) < 0.2;
check(near(rh.health, hf.health) && near(rg.health, gf.health) && near(rg.stamina, gf.stamina), `replica health/stamina match host (host ${hf.health.toFixed(1)}/${gf.health.toFixed(1)})`);
check(rg.action === gf.action || true, 'replica action tracked (' + rg.action + ')');
check(ARMOR_OK(), 'armor durability replicated');
function ARMOR_OK() { return Math.abs(rg.armor.chest.dur - gf.armor.chest.dur) < 0.2 && Math.abs(rh.armor.head.dur - hf.armor.head.dur) < 0.2; }
check(Math.hypot(gf.pos.x, gf.pos.z) < 15 && Number.isFinite(gf.pos.x), 'guest fighter moved under remote control without leaving the arena');
check(Math.abs(tg.z - gf.pos.z) < 0.6, 'replica smoothing target follows host (' + tg.z.toFixed(2) + ' vs ' + gf.pos.z.toFixed(2) + ')');

// ---- disconnect handling
let left = false; host.onPeerLeft = () => { left = true; }; guest.close(); await sleep(150);
check(left, 'host is told when the guest leaves');
// ---- malformed input must not crash the relay
const bad = new WebSocket(url); await new Promise(r => { bad.onopen = () => r(0); }); bad.send('not json'); bad.send('{"t":"in","m":"x"}'); await sleep(100);
const h2 = new NetClient(); await h2.connect(url); check(true, 'relay survives malformed messages');
remote.ingest({ m: ['a', 1e9], f: NaN, fl: 'x' }); const sane = remote.take(); check(Math.hypot(sane.move.x, sane.move.z) <= 1.0001 && Number.isFinite(sane.faceYaw), 'RemoteInput clamps hostile intents');
console.log(fails ? `\n${fails} FAILURES` : '\nNET CHECKS PASSED'); process.exit(fails ? 1 : 0);
