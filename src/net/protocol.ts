import { Fighter, Loadout, defaultLoadout } from '../combat/fighter';
import type { CombatWorld, Projectile } from '../combat/world';
import { CombatEvent, EventType, HitSpec, Intent, emptyIntent } from '../combat/types';
import { WEAPONS, getWeapon } from '../weapons/definitions';
import { ARMOR_SLOTS, ArmorSlot, getArmor } from '../armor/armor';
import type { Element, MoveDef } from '../weapons/types';
import { clamp } from '../core/math';

/**
 * Host-authoritative netcode. The host runs the only CombatWorld; the guest sends `Intent`s (`in` messages)
 * and renders snapshots (`snap`, 30 Hz) plus the combat events that happened since the previous one.
 * Fighters are addressed by index (0 = host, 1 = guest) because fighter ids differ per machine.
 */
const r2 = (n: number) => Math.round(n * 100) / 100;
const fin = (n: unknown, d = 0) => (typeof n === 'number' && Number.isFinite(n) ? n : d);

export function sanitizeLoadout(raw: any): Loadout {
  const d = defaultLoadout();
  try {
    if (raw && typeof raw.main === 'string' && WEAPONS[raw.main]) d.main = raw.main;
    if (raw && typeof raw.secondary === 'string' && WEAPONS[raw.secondary]) d.secondary = raw.secondary;
    d.shield = raw && typeof raw.shield === 'string' && WEAPONS[raw.shield] ? raw.shield : null;
    for (const s of ARMOR_SLOTS) { const id = raw?.armor?.[s]; if (typeof id === 'string') { try { if (getArmor(id).slot === s) d.armor[s] = id; } catch { /* unknown */ } } }
  } catch { /* defaults */ }
  return d;
}

let moveIdx: Map<string, MoveDef> | null = null;
function moveById(id: string): MoveDef | undefined {
  if (!moveIdx) { moveIdx = new Map(); for (const w of Object.values(WEAPONS)) for (const m of [...w.light, w.heavy, w.special]) moveIdx.set(m.id, m); }
  return moveIdx.get(id);
}

// ---------------------------------------------------------------- intents
export function packIntent(it: Intent) {
  const fl = (it.sprint ? 1 : 0) | (it.blockHeld ? 2 : 0) | (it.jumpPressed ? 4 : 0) | (it.dodgePressed ? 8 : 0) | (it.lightPressed ? 16 : 0) | (it.heavyPressed ? 32 : 0) | (it.specialPressed ? 64 : 0) | (it.blockPressed ? 128 : 0);
  return { t: 'in', m: [r2(it.move.x), r2(it.move.z)], f: r2(it.faceYaw), fl, sw: it.switchTo };
}
/** Host-side buffer for the guest's intents: held state is latest-wins, one-shot presses are latched until a sim step consumes them. */
export class RemoteInput {
  private held = emptyIntent(); private pend = { jump: false, dodge: false, light: false, heavy: false, special: false, bp: false, sw: 0 as 0 | 1 | 2 | 3 };
  ingest(m: any) {
    if (!m || !Array.isArray(m.m)) return;
    const x = clamp(fin(m.m[0]), -1, 1), z = clamp(fin(m.m[1]), -1, 1), l = Math.hypot(x, z), k = l > 1 ? 1 / l : 1;
    this.held.move.x = x * k; this.held.move.z = z * k; this.held.faceYaw = fin(m.f);
    const fl = fin(m.fl) | 0; this.held.sprint = !!(fl & 1); this.held.blockHeld = !!(fl & 2);
    if (fl & 4) this.pend.jump = true; if (fl & 8) this.pend.dodge = true; if (fl & 16) this.pend.light = true; if (fl & 32) this.pend.heavy = true; if (fl & 64) this.pend.special = true; if (fl & 128) this.pend.bp = true;
    const sw = fin(m.sw) | 0; if (sw >= 1 && sw <= 3) this.pend.sw = sw as 1 | 2 | 3;
  }
  take(): Intent {
    const h = this.held, p = this.pend;
    const it: Intent = { move: { x: h.move.x, z: h.move.z }, faceYaw: h.faceYaw, sprint: h.sprint, blockHeld: h.blockHeld, jumpPressed: p.jump, dodgePressed: p.dodge, lightPressed: p.light, heavyPressed: p.heavy, specialPressed: p.special, blockPressed: p.bp, switchTo: p.sw };
    this.pend = { jump: false, dodge: false, light: false, heavy: false, special: false, bp: false, sw: 0 };
    return it;
  }
  reset() { this.held = emptyIntent(); this.take(); }
}

// ---------------------------------------------------------------- snapshots
const PH = ['windup', 'active', 'recovery'] as const;
export function snapFighter(f: Fighter) {
  const a = f.attack;
  return {
    p: [r2(f.pos.x), r2(f.pos.y), r2(f.pos.z)], v: [r2(f.vel.x), r2(f.vel.y), r2(f.vel.z)], yaw: r2(f.yaw), og: f.onGround ? 1 : 0, ld: r2(f.landT),
    hp: r2(f.health), st: r2(f.stamina), po: r2(f.poise), act: f.action, at: r2(f.actT),
    a: a ? { m: a.move.id, s: a.move.style, ar: r2(a.move.arc), ph: PH.indexOf(a.phase), t: r2(a.t * 1000) / 1000, d: r2(a.dur * 1000) / 1000, sg: a.sign, hs: a.handSide } : null,
    ci: f.comboIdx, pt: r2(f.parryT), rt: r2(f.riposteT), cc: f.counterCharge, sp: r2(f.specialCd), slot: f.slot === 'main' ? 0 : 1,
    dt: r2(f.dodgeT), dd: r2(f.dodgeDur), db: f.dodgeBack ? 1 : 0, dx: r2(f.dodgeDirX), dz: r2(f.dodgeDirZ), sgt: r2(f.staggerT), sk: f.staggerKind, sw: r2(f.switchT), spr: f.sprinting ? 1 : 0,
    s: [r2(f.st.burn), r2(f.st.burnT), r2(f.st.chillT), r2(f.st.shockT), r2(f.st.hasteT), r2(f.st.haste), r2(f.st.wardHp), r2(f.st.wardT)],
    ar: ARMOR_SLOTS.map(s => [r2(f.armor[s].dur), f.armor[s].broken ? 1 : 0]),
  };
}
export type FSnap = ReturnType<typeof snapFighter>;
export interface SmoothTarget { x: number; y: number; z: number; vx: number; vz: number; yaw: number }

/** Apply a fighter snapshot. Position/yaw are returned as a smoothing target (rendering eases toward it). */
export function applyFighter(f: Fighter, s: FSnap, first: boolean): SmoothTarget {
  const tgt: SmoothTarget = { x: fin(s.p[0]), y: fin(s.p[1]), z: fin(s.p[2]), vx: fin(s.v[0]), vz: fin(s.v[2]), yaw: fin(s.yaw) };
  f.vel.x = fin(s.v[0]); f.vel.y = fin(s.v[1]); f.vel.z = fin(s.v[2]); f.onGround = !!s.og; f.landT = fin(s.ld);
  f.pos.y = tgt.y; if (first) { f.pos.x = tgt.x; f.pos.z = tgt.z; f.yaw = tgt.yaw; }
  f.health = fin(s.hp); f.stamina = fin(s.st); f.poise = fin(s.po); f.action = s.act; f.actT = fin(s.at);
  f.slot = s.slot ? 'secondary' : 'main'; f.comboIdx = fin(s.ci); f.parryT = fin(s.pt); f.riposteT = fin(s.rt); f.counterCharge = fin(s.cc); f.specialCd = fin(s.sp);
  f.dodgeT = fin(s.dt); f.dodgeDur = fin(s.dd, 0.4); f.dodgeBack = !!s.db; f.dodgeDirX = fin(s.dx); f.dodgeDirZ = fin(s.dz);
  f.staggerT = fin(s.sgt); f.staggerKind = s.sk; f.switchT = fin(s.sw); f.sprinting = !!s.spr;
  const st = f.st, q = s.s; st.burn = fin(q[0]); st.burnT = fin(q[1]); st.chillT = fin(q[2]); st.shockT = fin(q[3]); st.hasteT = fin(q[4]); st.haste = fin(q[5]); st.wardHp = fin(q[6]); st.wardT = fin(q[7]);
  ARMOR_SLOTS.forEach((slot: ArmorSlot, i) => { f.armor[slot].dur = fin(s.ar[i][0]); f.armor[slot].broken = !!s.ar[i][1]; });
  if (s.a) {
    const base = moveById(s.a.m);
    if (base) {
      const prev = f.attack, move: MoveDef = { ...base, style: s.a.s, arc: s.a.ar };
      if (!prev || prev.move.id !== move.id) f.attack = { move, weapon: f.weapon, phase: PH[s.a.ph] ?? 'windup', t: 0, dur: 0.3, sign: s.a.sg, handSide: s.a.hs, hit: new Set(), spec: {} as HitSpec, riposte: false, lastP: 0, group: 0, lunged: true, clanged: false };
      const a = f.attack!; a.move = move; a.phase = PH[s.a.ph] ?? a.phase; a.t = fin(s.a.t); a.dur = Math.max(0.01, fin(s.a.d, 0.3)); a.sign = s.a.sg; a.handSide = s.a.hs;
    }
  } else f.attack = null;
  return tgt;
}

export function snapProjectile(p: Projectile) {
  return { id: p.id, k: p.kind, p: [r2(p.pos.x), r2(p.pos.y), r2(p.pos.z)], v: [r2(p.vel.x), r2(p.vel.y), r2(p.vel.z)], r: r2(p.radius), w: p.wave ? 1 : 0, e: p.spec.element };
}
export function applyProjectiles(world: CombatWorld, list: ReturnType<typeof snapProjectile>[]) {
  world.projectiles = list.map(s => ({
    id: s.id, owner: -1, team: -1, pos: { x: s.p[0], y: s.p[1], z: s.p[2] }, prev: { x: s.p[0], y: s.p[1], z: s.p[2] }, vel: { x: s.v[0], y: s.v[1], z: s.v[2] },
    radius: s.r, life: 1, gravity: 0, wave: !!s.w, spec: { element: s.e as Element } as HitSpec, hit: new Set<number>(), dead: false, kind: s.k as Projectile['kind'],
  }));
}

// ---------------------------------------------------------------- events
export function eventToNet(e: CombatEvent, world: CombatWorld) {
  const idx = (id?: number) => { if (id === undefined) return undefined; const i = world.fighters.findIndex(f => f.id === id); return i < 0 ? undefined : i; };
  return { y: e.type, p: [r2(e.pos.x), r2(e.pos.y), r2(e.pos.z)], a: idx(e.attacker), t: idx(e.target), e: e.element, h: e.heavy ? 1 : 0, d: e.dmg === undefined ? undefined : r2(e.dmg), w: e.weaponId, z: e.zone, r: e.radius, b: e.blocked ? 1 : 0, dir: e.dir ? [r2(e.dir.x), r2(e.dir.z)] : undefined };
}
export function eventFromNet(n: any, world: CombatWorld): CombatEvent | null {
  if (!n || !Array.isArray(n.p) || typeof n.y !== 'string') return null;
  const id = (i: unknown) => (typeof i === 'number' && world.fighters[i] ? world.fighters[i].id : undefined);
  return { type: n.y as EventType, pos: { x: fin(n.p[0]), y: fin(n.p[1]), z: fin(n.p[2]) }, attacker: id(n.a), target: id(n.t), element: n.e, heavy: !!n.h, dmg: n.d, weaponId: n.w, zone: n.z, radius: n.r, blocked: !!n.b, dir: Array.isArray(n.dir) ? { x: fin(n.dir[0]), y: 0, z: fin(n.dir[1]) } : undefined };
}
void getWeapon;
