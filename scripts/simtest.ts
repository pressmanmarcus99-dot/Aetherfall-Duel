declare const process: { exit(code: number): never };
import { CombatWorld } from '../src/combat/world';
import { defaultLoadout } from '../src/combat/fighter';
import { AIController, Difficulty } from '../src/ai/ai';
import { COLOSSEUM } from '../src/arenas/spec';
import { WEAPON_ORDER, getWeapon } from '../src/weapons/definitions';
import { Intent } from '../src/combat/types';

let fails = 0;
const check = (ok: boolean, msg: string) => { if (!ok) { fails++; console.log('FAIL: ' + msg); } };

function duel(a: string, b: string, da: Difficulty, db: Difficulty, seed: number, secs = 60) {
  const w = new CombatWorld(COLOSSEUM, seed);
  const la = { ...defaultLoadout(), main: a }, lb = { ...defaultLoadout(), main: b };
  const fa = w.add('A', 0, la, 0), fb = w.add('B', 1, lb, 1);
  const ais = [new AIController(fa, da, seed), new AIController(fb, db, seed + 1)];
  const st = { hits: 0, blocks: 0, parries: 0, dodges: 0, staggers: 0, projectiles: 0, specials: 0, swings: 0, t: 0, winner: null as number | null };
  const dt = 1 / 60;
  const perAttackHits = new Map<string, number>();
  for (let i = 0; i < secs * 60; i++) {
    const intents = new Map<number, Intent>();
    for (const ai of ais) intents.set(ai.me.id, ai.think(w, dt));
    w.step(dt, intents);
    for (const e of w.events) {
      if (e.type === 'hit') st.hits++; else if (e.type === 'block') st.blocks++; else if (e.type === 'parry') st.parries++;
      else if (e.type === 'dodge') st.dodges++; else if (e.type === 'projectile') st.projectiles++; else if (e.type === 'special') st.specials++; else if (e.type === 'swing') st.swings++;
    }
    for (const f of w.fighters) {
      for (const v of [f.pos.x, f.pos.y, f.pos.z, f.health, f.stamina, f.yaw, f.vel.x, f.vel.z]) if (!Number.isFinite(v)) { check(false, `NaN ${a} v ${b} t=${i}`); return st; }
      check(Math.hypot(f.pos.x, f.pos.z) <= COLOSSEUM.radius + 0.01, `out of arena ${a} v ${b}`);
      check(f.stamina >= 0 && f.stamina <= f.maxStamina + 1e-6, 'stamina range');
    }
    st.t = i / 60;
    const win = w.winner(); if (win !== null) { st.winner = win; break; }
  }
  void perAttackHits;
  return st;
}

// 1) every weapon can fight every other (rotating pairing) without NaN and actually produces combat
let total = { hits: 0, swings: 0, parries: 0, blocks: 0, dodges: 0 };
const idx = WEAPON_ORDER.filter(id => getWeapon(id).grip !== 'shield' || true);
for (let i = 0; i < idx.length; i++) {
  const a = idx[i], b = idx[(i + 5) % idx.length];
  const s = duel(a, b, 'veteran', 'warrior', 100 + i);
  total.hits += s.hits; total.swings += s.swings; total.parries += s.parries; total.blocks += s.blocks; total.dodges += s.dodges;
  check(s.swings > 0, `${a} never attacked vs ${b}`);
  console.log(`${a.padEnd(11)} vs ${b.padEnd(11)} swings ${String(s.swings).padStart(3)} hits ${String(s.hits).padStart(3)} blk ${String(s.blocks).padStart(2)} par ${s.parries} dge ${String(s.dodges).padStart(2)} proj ${s.projectiles} spec ${s.specials} winner ${s.winner} @${s.t.toFixed(1)}s`);
}
check(total.hits > 20, 'combat produced hits');
check(total.blocks > 0, 'blocking occurred');
check(total.parries > 0, 'parries occurred');
check(total.dodges > 0, 'dodges occurred');

// 2) difficulty ordering: master should beat novice clearly (behaviour, not stats)
let masterWins = 0, noviceWins = 0;
for (let i = 0; i < 12; i++) {
  const s = duel('longsword', 'longsword', i % 2 ? 'novice' : 'master', i % 2 ? 'master' : 'novice', 500 + i, 90);
  const masterTeam = i % 2 ? 1 : 0;
  if (s.winner === masterTeam) masterWins++; else if (s.winner === 1 - masterTeam) noviceWins++;
}
console.log(`master wins ${masterWins}, novice wins ${noviceWins} of 12`);
check(masterWins > noviceWins, 'master AI beats novice AI');

// 3) hit-once-per-attack: a single swing must not hit the same target twice
{
  const w = new CombatWorld(COLOSSEUM, 3);
  const a = w.add('A', 0, { ...defaultLoadout(), main: 'greatsword' }, 0), b = w.add('B', 1, defaultLoadout(), 1);
  b.pos.x = 0; b.pos.z = a.pos.z + 1.6; a.yaw = 0; b.yaw = Math.PI;
  const swing = (): Intent => ({ move: { x: 0, z: 0 }, faceYaw: 0, sprint: false, blockHeld: false, jumpPressed: false, dodgePressed: false, lightPressed: true, heavyPressed: false, specialPressed: false, blockPressed: false, switchTo: 0 });
  const idle = { ...swing(), lightPressed: false };
  let hitsInOne = 0, started = false;
  for (let i = 0; i < 200; i++) {
    const m = new Map<number, Intent>(); m.set(a.id, i === 0 ? swing() : idle); m.set(b.id, { ...idle, faceYaw: Math.PI });
    w.step(1 / 60, m); b.pos.z = a.pos.z + 1.6; b.vel.z = 0;
    if (a.attack) started = true;
    hitsInOne += w.events.filter(e => e.type === 'hit' || e.type === 'block').length;
    if (started && !a.attack) break;
  }
  console.log('single swing hit events:', hitsInOne);
  check(hitsInOne === 1, 'one swing => exactly one hit event (got ' + hitsInOne + ')');
}

console.log(fails ? `\n${fails} FAILURES` : '\nALL SIM CHECKS PASSED');
process.exit(fails ? 1 : 0);
