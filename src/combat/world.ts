import { V3, clamp, dist2D, fwd, makeRng, segSegDistSq, v3, wrapAngle, yawTo } from '../core/math';
import { ARMOR_SLOTS, ArmorSlot, pieceResist } from '../armor/armor';
import type { ArenaSpec } from '../arenas/spec';
import type { MoveDef } from '../weapons/types';
import { Fighter, Loadout } from './fighter';
import { swingPose } from './swing';
import { CombatEvent, HitSpec, Intent, emptyIntent } from './types';
import { stepMovement } from '../movement/controller';

export interface Projectile {
  id: number; owner: number; team: number; pos: V3; prev: V3; vel: V3; radius: number; life: number; gravity: number;
  wave: boolean; spec: HitSpec; hit: Set<number>; dead: boolean; kind: 'arrow' | 'bolt' | 'wave';
}
type HitResult = 'hit' | 'block' | 'parry' | 'dodge' | 'guardbreak' | 'none';

const BODY_H = 1.75, BODY_R = 0.42;
const DODGE_COST = 18, BACKSTEP_COST = 9;

/**
 * Authoritative combat simulation. No rendering, no DOM, no wall-clock: feed it intents + dt, read
 * events. Deterministic given the seed, which is what makes rollback/lockstep multiplayer feasible later.
 */
export class CombatWorld {
  fighters: Fighter[] = [];
  projectiles: Projectile[] = [];
  events: CombatEvent[] = [];
  hitStop = 0; time = 0;
  private rng: () => number; private nextProj = 1;
  constructor(public arena: ArenaSpec, seed = 1) { this.rng = makeRng(seed); }

  add(name: string, team: number, loadout: Loadout, spawnIdx: number): Fighter {
    const f = new Fighter(name, team, loadout, this.arena.spawns[spawnIdx % this.arena.spawns.length]);
    this.fighters.push(f); return f;
  }
  enemiesOf(f: Fighter) { return this.fighters.filter(o => o.team !== f.team && !o.dead); }
  nearestEnemy(f: Fighter): Fighter | null {
    let best: Fighter | null = null, bd = Infinity;
    for (const o of this.enemiesOf(f)) { const d = dist2D(f.pos, o.pos); if (d < bd) { bd = d; best = o; } }
    return best;
  }
  private emit(e: CombatEvent) { this.events.push(e); }

  // ------------------------------------------------------------------ main step
  step(rawDt: number, intents: Map<number, Intent>) {
    this.events.length = 0;
    let dt = Math.min(rawDt, 1 / 20);
    if (this.hitStop > 0) { this.hitStop -= rawDt; dt *= 0.03; }   // hit-stop: near-freeze, not a hard stop
    this.time += dt;
    for (const f of this.fighters) this.updateFighter(f, intents.get(f.id) ?? emptyIntent(), dt);
    this.updateProjectiles(dt);
  }

  private updateFighter(f: Fighter, intent: Intent, dt: number) {
    if (f.dead) { stepMovement(f, intent, dt, this.arena, this.fighters); return; }
    f.actT += dt; f.staminaDelay -= dt; f.parryT -= dt; f.riposteT -= dt; f.specialCd -= dt; f.blockCd -= dt; f.comboT -= dt; f.poiseDelay -= dt;
    const s = f.st;
    s.chillT -= dt; s.shockT -= dt; s.hasteT -= dt; s.wardT -= dt; s.burnT -= dt;
    if (s.wardT <= 0) s.wardHp = 0;
    if (s.burnT > 0) { f.health -= s.burn * dt; if (f.health <= 0) { this.kill(f, f.lastHitBy); return; } }
    if (f.buffer) { f.buffer.t -= dt; if (f.buffer.t <= 0) f.buffer = null; }
    if (f.comboT <= 0 && f.action === 'idle') f.comboIdx = 0;
    if (f.poiseDelay <= 0) f.poise = Math.min(f.maxPoise, f.poise + 22 * dt);
    if (f.staminaDelay <= 0 && !f.sprinting) {
      const regen = f.staminaRegen * (f.action === 'block' ? 0.4 : f.action === 'attack' ? 0.3 : 1);
      f.stamina = Math.min(f.maxStamina, f.stamina + regen * dt);
    }

    switch (f.action) {
      case 'idle': case 'block': this.updateFree(f, intent); break;
      case 'attack': this.updateAttack(f, intent, dt); break;
      case 'dodge': f.dodgeT -= dt; if (f.dodgeT <= 0) { f.action = 'idle'; f.actT = 0; } break;
      case 'stagger': f.staggerT -= dt; if (f.staggerT <= 0) { f.action = 'idle'; f.actT = 0; } break;
      case 'switch': f.switchT -= dt; if (f.switchT <= 0) { f.action = 'idle'; f.actT = 0; } break;
    }
    if (f.dead) return;
    const mv = stepMovement(f, intent, dt, this.arena, this.fighters);
    if (mv.jumped) this.emit({ type: 'jump', pos: { ...f.pos }, attacker: f.id });
    if (mv.landed) this.emit({ type: 'land', pos: { ...f.pos }, attacker: f.id });
    if (f.onGround && f.action !== 'dodge') {
      f.stepAcc += Math.hypot(f.vel.x, f.vel.z) * dt;
      if (f.stepAcc > (f.sprinting ? 2.3 : 1.6)) { f.stepAcc = 0; this.emit({ type: 'step', pos: { ...f.pos }, attacker: f.id }); }
    }
  }

  // ------------------------------------------------------------------ idle / block decisions
  private updateFree(f: Fighter, intent: Intent) {
    if (intent.switchTo) { if (this.startSwitch(f, intent.switchTo)) return; }
    if (intent.dodgePressed && this.startDodge(f, intent)) return;
    if (intent.heavyPressed && this.startAttack(f, 'heavy', intent)) return;
    if (intent.specialPressed && this.startAttack(f, 'special', intent)) return;
    if (intent.lightPressed && this.startAttack(f, 'light', intent)) return;
    if (intent.blockHeld && f.weapon.grip !== 'bow' || (intent.blockHeld && f.weapon.grip === 'bow')) {
      if (f.action !== 'block') {
        f.action = 'block'; f.actT = 0;
        if (intent.blockPressed && f.blockCd <= 0) { f.parryT = f.defense.parryWindow; f.blockCd = 0.45; }   // anti-spam: parry window can't be re-armed instantly
      }
    } else if (f.action === 'block') { f.action = 'idle'; f.actT = 0; }
  }

  private startSwitch(f: Fighter, to: 1 | 2 | 3): boolean {
    const target = to === 3 ? (f.slot === 'main' ? 'secondary' : 'main') : to === 1 ? 'main' : 'secondary';
    if (target === f.slot) return false;
    f.slot = target; f.action = 'switch'; f.switchT = 0.35; f.actT = 0; f.comboIdx = 0; f.comboT = 0; f.attack = null; f.buffer = null; f.parryT = 0;
    this.emit({ type: 'switch', pos: { ...f.pos }, attacker: f.id, weaponId: f.weapon.id });
    return true;
  }

  private startDodge(f: Fighter, intent: Intent): boolean {
    const mag = Math.hypot(intent.move.x, intent.move.z);
    const back = mag < 0.2, cost = back ? BACKSTEP_COST : DODGE_COST;
    if (f.stamina < cost || !f.onGround) return false;
    f.spendStamina(cost, 0.7);
    f.dodgeBack = back;
    if (back) { f.dodgeDirX = -f.forward.x; f.dodgeDirZ = -f.forward.z; } else { f.dodgeDirX = intent.move.x / mag; f.dodgeDirZ = intent.move.z / mag; }
    f.dodgeDur = back ? 0.32 : 0.42; f.dodgeT = f.dodgeDur; f.action = 'dodge'; f.actT = 0;
    f.attack = null; f.comboIdx = 0; f.comboT = 0; f.parryT = 0; f.buffer = null;
    this.emit({ type: 'dodge', pos: { ...f.pos }, attacker: f.id, dir: v3(f.dodgeDirX, 0, f.dodgeDirZ) });
    return true;
  }

  // ------------------------------------------------------------------ attacks
  private startAttack(f: Fighter, kind: 'light' | 'heavy' | 'special', intent: Intent): boolean {
    const w = f.weapon;
    let move: MoveDef; let idx = 0;
    if (kind === 'light') { idx = (f.comboT > 0 ? f.comboIdx : 0) % w.light.length; move = w.light[idx]; }
    else move = kind === 'heavy' ? w.heavy : w.special;
    if (kind === 'special') {
      if (f.specialCd > 0) return false;
      if (move.fx?.type === 'pulse' && f.counterCharge < 1) return false;
    }
    if (f.stamina < move.stamina * 0.6) return false;

    // directional variants: forward input => lunging thrust, backward input => low sweep
    const mag = Math.hypot(intent.move.x, intent.move.z);
    const along = mag > 0.3 ? (intent.move.x * f.forward.x + intent.move.z * f.forward.z) / mag : 0;
    const lateral = mag > 0.3 ? (intent.move.x * f.right.x + intent.move.z * f.right.z) / mag : 0;
    const bladed = move.melee && kind === 'light' && (move.style === 'slash' || move.style === 'diag');
    if (bladed && along > 0.6 && w.grip !== 'dual') move = { ...move, style: 'thrust', lunge: Math.max(move.lunge, 3.5), radius: Math.min(move.radius, 0.15) };
    else if (bladed && along < -0.6) move = { ...move, style: 'sweep', arc: move.arc * 1.25, knock: move.knock * 1.3 };
    const sign = lateral > 0.45 ? -1 : lateral < -0.45 ? 1 : (idx % 2 === 0 ? 1 : -1);
    const handSide = w.grip === 'shield' ? -1 : (w.grip === 'dual' || w.grip === 'gauntlet') ? (idx % 2 === 0 ? 1 : -1) : 1;

    const riposte = f.riposteT > 0 && move.melee; if (riposte) f.riposteT = 0;
    const dur = (move.windup * (riposte ? 0.75 : 1)) / f.attackSpeed;
    const spec = this.specFor(f, move, riposte);
    f.spendStamina(move.stamina, 0.9);
    f.action = 'attack'; f.actT = 0; f.parryT = 0; f.buffer = null;
    f.attack = { move, weapon: w, phase: 'windup', t: 0, dur, sign, handSide, hit: new Set(), spec, riposte, lastP: 0, group: 0, lunged: false, clanged: false };
    f.comboIdx = kind === 'light' ? idx + 1 : 0; f.comboT = 99;
    if (kind === 'special') { f.specialCd = move.cooldown; this.emit({ type: 'special', pos: { ...f.pos }, attacker: f.id, weaponId: w.id, element: w.element }); }
    if (riposte) this.emit({ type: 'riposte', pos: { ...f.pos }, attacker: f.id });
    return true;
  }

  private specFor(f: Fighter, m: MoveDef, riposte: boolean): HitSpec {
    const w = f.weapon;
    return { damage: m.damage * (riposte ? 1.5 : 1), type: w.damageType, poise: m.poise, knock: m.knock, armorPierce: m.armorPierce, armorBreak: m.armorBreak,
      unparryable: m.unparryable, hitStop: m.hitStop, heavy: m.kind !== 'light', element: w.element, onHit: w.onHit, weaponId: w.id, ranged: !m.melee, riposte };
  }

  private updateAttack(f: Fighter, intent: Intent, dt: number) {
    const a = f.attack; if (!a) { f.action = 'idle'; return; }
    // buffer next input; allow dodge / block cancels late in recovery
    if (intent.lightPressed) f.buffer = { kind: 'light', t: 0.28 };
    else if (intent.heavyPressed) f.buffer = { kind: 'heavy', t: 0.28 };
    else if (intent.specialPressed) f.buffer = { kind: 'special', t: 0.28 };
    const prog = a.t / a.dur;
    if (a.phase === 'recovery') {
      if (intent.dodgePressed && prog > 0.35 && this.startDodge(f, intent)) return;
      if (intent.blockPressed && prog > 0.5) { f.attack = null; f.action = 'idle'; f.comboT = 0; this.updateFree(f, intent); return; }
      if (f.buffer && prog >= 0.55) { const b = f.buffer; f.attack = null; f.action = 'idle'; if (this.startAttack(f, b.kind, intent)) return; }
    }
    a.t += dt;
    if (a.phase === 'windup' && a.t >= a.dur) {
      a.phase = 'active'; a.t = 0; a.dur = a.move.active / f.attackSpeed; a.lastP = 0; a.group = 0;
      this.onActiveStart(f, a.move);
    } else if (a.phase === 'active') {
      const p1 = clamp(a.t / a.dur, 0, 1);
      if (a.move.melee) this.sweepTest(f, a.lastP, p1);
      a.lastP = p1;
      if (a.t >= a.dur || a.clanged) { a.phase = 'recovery'; a.t = 0; a.dur = (a.move.recovery + (a.clanged ? 0.25 : 0)) / f.attackSpeed; }
    } else if (a.phase === 'recovery' && a.t >= a.dur) {
      f.attack = null; f.action = 'idle'; f.actT = 0; f.comboT = 0.3;
    }
  }

  private onActiveStart(f: Fighter, m: MoveDef) {
    const a = f.attack!;
    if (m.lunge > 0 && !a.lunged) { f.vel.x += f.forward.x * m.lunge; f.vel.z += f.forward.z * m.lunge; a.lunged = true; if (m.lunge >= 6) this.emit({ type: 'dash', pos: { ...f.pos }, attacker: f.id, element: f.weapon.element }); }
    this.emit({ type: 'swing', pos: { ...f.pos }, attacker: f.id, weaponId: f.weapon.id, element: f.weapon.element, heavy: m.kind !== 'light' });
    const fx = m.fx; if (!fx) return;
    const spec = a.spec;
    switch (fx.type) {
      case 'projectile': {
        const n = fx.count ?? 1;
        for (let i = 0; i < n; i++) this.spawnProjectile(f, spec, fx.speed ?? 30, (i - (n - 1) / 2) * (fx.spread ?? 0), fx.radius ?? 0.12, fx.gravity ?? 0, fx.life ?? 2, false, spec.ranged ? 'arrow' : 'bolt');
        break;
      }
      case 'wave': this.spawnProjectile(f, spec, fx.speed ?? 12, 0, fx.radius ?? 0.9, 0, fx.life ?? 1.2, true, 'wave'); this.emit({ type: 'wave', pos: { ...f.pos }, attacker: f.id, element: f.weapon.element }); break;
      case 'burst': this.aoe(f, { ...spec, ranged: false }, fx.radius ?? 3, false); break;
      case 'pulse': {
        const charge = f.counterCharge; f.counterCharge = 0;
        this.aoe(f, { ...spec, damage: spec.damage + 8 * charge, poise: spec.poise + 15 * charge }, fx.radius ?? 3, true); break;
      }
      case 'ward':
        if (fx.ward) { f.st.wardHp = fx.ward; f.st.wardT = fx.dur ?? 4; }
        if (fx.haste) { f.st.haste = fx.haste; f.st.hasteT = fx.dur ?? 3; }
        this.emit({ type: 'ward', pos: { ...f.pos }, attacker: f.id, element: f.weapon.element }); break;
    }
  }

  /** World-space weapon segment (grip -> tip) for a given swing progress. Shared basis with the animator. */
  weaponSegment(f: Fighter, p: number): { a: V3; b: V3 } | null {
    const at = f.attack; if (!at) return null;
    const pose = swingPose(at.move, 'active', p, at.sign);
    const spin = at.move.style === 'spin';
    const lx = spin ? 0 : 0.32 * at.handSide, ly = 1.25, lz = spin ? 0.1 : 0.3;
    const len = at.move.reach * pose.extend;
    const fw = f.forward, rt = f.right;
    const toWorld = (x: number, y: number, z: number): V3 => ({ x: f.pos.x + rt.x * x + fw.x * z, y: f.pos.y + y, z: f.pos.z + rt.z * x + fw.z * z });
    return { a: toWorld(lx, ly, lz), b: toWorld(lx + pose.dx * len, ly + pose.dy * len, lz + pose.dz * len) };
  }

  /** Swept hit test across the swing interval [p0,p1] (4 sub-samples so fast swings cannot tunnel). */
  private sweepTest(f: Fighter, p0: number, p1: number) {
    const a = f.attack!, m = a.move, foes = this.enemiesOf(f);
    const N = 4;
    for (let i = 1; i <= N; i++) {
      const p = p0 + (p1 - p0) * (i / N);
      if (m.multi > 1) { const g = Math.min(m.multi - 1, Math.floor(p * m.multi)); if (g !== a.group) { a.group = g; a.hit.clear(); } }
      const seg = this.weaponSegment(f, p); if (!seg) return;
      // environment: weapon strikes a pillar/brazier => clang and a punished recovery
      if (m.style !== 'bash') for (const c of this.arena.colliders) {
        if (seg.b.y < c.h && Math.hypot(seg.b.x - c.x, seg.b.z - c.z) < c.r) {
          a.clanged = true; this.emit({ type: 'clang', pos: { ...seg.b }, attacker: f.id, weaponId: a.weapon.id }); return;
        }
      }
      for (const t of foes) {
        if (a.hit.has(t.id)) continue;
        const base = { x: t.pos.x, y: t.pos.y, z: t.pos.z }, top = { x: t.pos.x, y: t.pos.y + BODY_H, z: t.pos.z };
        const rad = m.radius + BODY_R;
        if (segSegDistSq(seg.a, seg.b, base, top) <= rad * rad) {
          a.hit.add(t.id);
          const hp = { x: (seg.b.x + t.pos.x) / 2, y: clamp(seg.b.y, t.pos.y + 0.2, t.pos.y + BODY_H), z: (seg.b.z + t.pos.z) / 2 };
          this.resolveHit(f, t, a.spec, hp, f.pos);
        }
      }
    }
  }

  // ------------------------------------------------------------------ projectiles / area
  private spawnProjectile(f: Fighter, spec: HitSpec, speed: number, yawOff: number, radius: number, gravity: number, life: number, wave: boolean, kind: Projectile['kind']) {
    let yaw = f.yaw, vy = 0;
    const foe = this.nearestEnemy(f);
    if (foe && !wave) {                         // aim assist: snap to a target inside ~35 degrees
      const dx = foe.pos.x - f.pos.x, dz = foe.pos.z - f.pos.z, d = Math.hypot(dx, dz);
      if (Math.abs(wrapAngle(yawTo(dx, dz) - f.yaw)) < 0.6 && d > 0.1) { yaw = yawTo(dx, dz); vy = ((foe.pos.y + 1.2) - (f.pos.y + 1.35)) / (d / speed) + 0.5 * gravity * (d / speed); }
    }
    yaw += yawOff; const d = fwd(yaw);
    const pos = wave ? v3(f.pos.x + d.x * 1.2, 0.3, f.pos.z + d.z * 1.2) : v3(f.pos.x + d.x * 0.6, f.pos.y + 1.35, f.pos.z + d.z * 0.6);
    this.projectiles.push({ id: this.nextProj++, owner: f.id, team: f.team, pos, prev: { ...pos }, vel: v3(d.x * speed, wave ? 0 : vy, d.z * speed), radius, life, gravity, wave, spec: { ...spec }, hit: new Set(), dead: false, kind });
    this.emit({ type: 'projectile', pos: { ...pos }, attacker: f.id, element: spec.element, dir: v3(d.x, 0, d.z), weaponId: spec.weaponId });
  }

  private updateProjectiles(dt: number) {
    for (const p of this.projectiles) {
      p.prev = { ...p.pos };
      p.vel.y -= p.gravity * dt; p.pos.x += p.vel.x * dt; p.pos.y += p.vel.y * dt; p.pos.z += p.vel.z * dt; p.life -= dt;
      if (p.life <= 0 || Math.hypot(p.pos.x, p.pos.z) > this.arena.radius + 2 || (!p.wave && p.pos.y < 0)) { p.dead = true; continue; }
      for (const c of this.arena.colliders) if (p.pos.y < c.h && Math.hypot(p.pos.x - c.x, p.pos.z - c.z) < c.r + p.radius) { p.dead = true; this.emit({ type: 'clang', pos: { ...p.pos } }); break; }
      if (p.dead) continue;
      const owner = this.fighters.find(f => f.id === p.owner);
      for (const t of this.fighters) {
        if (t.team === p.team || t.dead || p.hit.has(t.id)) continue;
        let touch: boolean;
        if (p.wave) touch = t.pos.y < 0.8 && dist2D(p.pos, t.pos) < p.radius + BODY_R;            // ground wave: jump it
        else touch = segSegDistSq(p.prev, p.pos, t.pos, v3(t.pos.x, t.pos.y + BODY_H, t.pos.z)) <= (p.radius + BODY_R) ** 2;
        if (!touch) continue;
        p.hit.add(t.id);
        const r = this.resolveHit(owner ?? null, t, p.spec, { ...p.pos }, owner ? owner.pos : p.prev, true);
        if (r !== 'dodge') { p.dead = true; break; }
      }
    }
    this.projectiles = this.projectiles.filter(p => !p.dead);
  }

  private aoe(f: Fighter, spec: HitSpec, radius: number, shove: boolean) {
    this.emit({ type: shove ? 'pulse' : 'burst', pos: { ...f.pos }, attacker: f.id, element: spec.element, radius });
    for (const t of this.enemiesOf(f)) {
      if (dist2D(f.pos, t.pos) > radius + BODY_R || Math.abs(t.pos.y - f.pos.y) > 1.6) continue;
      this.resolveHit(f, t, spec, { x: t.pos.x, y: t.pos.y + 1.1, z: t.pos.z }, f.pos);
    }
  }

  // ------------------------------------------------------------------ hit resolution
  private resolveHit(attacker: Fighter | null, t: Fighter, spec: HitSpec, hp: V3, from: V3, projectile = false): HitResult {
    if (t.dead) return 'none';
    const toSrcX = from.x - t.pos.x, toSrcZ = from.z - t.pos.z, dl = Math.hypot(toSrcX, toSrcZ) || 1;
    const ux = toSrcX / dl, uz = toSrcZ / dl;                           // unit vector target -> source
    const aid = attacker?.id;

    // ---- dodge invulnerability
    if (t.action === 'dodge') {
      const e = t.dodgeDur - t.dodgeT;
      if (e > 0.05 && e < t.dodgeDur - 0.12) { this.emit({ type: 'dodge', pos: hp, attacker: aid, target: t.id, blocked: true }); return 'dodge'; }
    }
    const def = t.defense;
    const front = t.forward.x * ux + t.forward.z * uz > Math.cos(def.blockArc);
    // ---- parry / block (directional)
    if (t.action === 'block' && front) {
      if (t.parryT > 0 && !spec.unparryable) {
        t.parryT = 0; t.riposteT = 1.4; t.stamina = Math.min(t.maxStamina, t.stamina + 8); t.action = 'idle';
        if (attacker && !projectile) this.stagger(attacker, 0.9, 'parried');
        this.hitStop = Math.max(this.hitStop, 0.12);
        this.emit({ type: 'parry', pos: hp, attacker: aid, target: t.id, element: spec.element, heavy: spec.heavy });
        return 'parry';
      }
      const cost = spec.damage * def.blockStamina * (spec.heavy ? 1.3 : 1) + spec.poise * 0.1;
      if (t.stamina >= cost) {
        t.spendStamina(cost, 1.1);
        const chip = spec.damage * (1 - def.blockReduction);
        t.health -= chip; t.lastHitBy = aid ?? -1;
        t.vel.x -= ux * spec.knock * 0.4; t.vel.z -= uz * spec.knock * 0.4;
        if (def.counterPulse) t.counterCharge = Math.min(3, t.counterCharge + 1);
        this.hitStop = Math.max(this.hitStop, spec.hitStop * 0.6);
        this.emit({ type: 'block', pos: hp, attacker: aid, target: t.id, element: spec.element, heavy: spec.heavy, dmg: chip });
        if (t.health <= 0) this.kill(t, aid ?? -1);
        return 'block';
      }
      t.stamina = 0; t.staminaDelay = 2;                               // guard break
      this.stagger(t, 0.9, 'guardbreak');
      const dmg = spec.damage * 0.6; t.health -= dmg; t.lastHitBy = aid ?? -1;
      this.hitStop = Math.max(this.hitStop, 0.1);
      this.emit({ type: 'guardbreak', pos: hp, attacker: aid, target: t.id, dmg });
      if (t.health <= 0) this.kill(t, aid ?? -1);
      return 'guardbreak';
    }
    // ---- clean hit: zone -> armor -> ward -> health
    const h = hp.y - t.pos.y;
    const zone: ArmorSlot = h > 1.5 ? 'head' : h < 0.8 ? 'legs' : (this.rng() < 0.18 ? 'arms' : 'chest');
    const piece = t.armor[zone];
    const red = clamp(pieceResist(piece, spec.type) * (1 - spec.armorPierce), 0, 0.85);
    let dmg = spec.damage * (1 - red);
    if (!piece.broken) {
      piece.dur -= spec.damage * 0.55 * spec.armorBreak * (spec.type === 'blunt' ? 1.4 : 1);
      if (piece.dur <= 0) { piece.broken = true; piece.dur = 0; this.emit({ type: 'armorbreak', pos: hp, target: t.id, zone }); }
    }
    if (t.st.wardHp > 0) { const ab = Math.min(t.st.wardHp, dmg); t.st.wardHp -= ab; dmg -= ab; this.emit({ type: 'ward', pos: hp, target: t.id, blocked: true }); }
    t.health -= dmg; t.lastHitBy = aid ?? -1;
    t.vel.x -= ux * spec.knock; t.vel.z -= uz * spec.knock;
    // status effects
    const oh = spec.onHit;
    if (oh.burn) { t.st.burn = oh.burn; t.st.burnT = 4; }
    if (oh.chill) t.st.chillT = oh.chill + 1.5;
    if (oh.shock) t.st.shockT = oh.shock;
    if (oh.staminaDmg) t.spendStamina(oh.staminaDmg + (oh.shock ? 6 : 0), 1.2);
    // poise: a light hit does not necessarily interrupt; heavy pressure does
    t.poise -= spec.poise + (oh.poiseDmg ?? 0) + (oh.shock ? 10 : 0); t.poiseDelay = 1.5;
    if (t.poise <= 0 && t.health > 0) { t.poise = t.maxPoise * 0.6; this.stagger(t, clamp(0.28 + spec.poise * 0.011 - t.staggerResist * 0.008, 0.22, 0.95), 'hit'); }
    this.hitStop = Math.max(this.hitStop, spec.hitStop);
    this.emit({ type: 'hit', pos: hp, attacker: aid, target: t.id, element: spec.element, heavy: spec.heavy, dmg, zone, weaponId: spec.weaponId, dir: v3(-ux, 0, -uz) });
    if (t.health <= 0) this.kill(t, aid ?? -1);
    return 'hit';
  }

  private stagger(f: Fighter, dur: number, kind: 'hit' | 'parried' | 'guardbreak') {
    if (f.dead) return;
    f.action = 'stagger'; f.staggerT = dur; f.staggerKind = kind; f.actT = 0;
    f.attack = null; f.buffer = null; f.comboIdx = 0; f.comboT = 0; f.parryT = 0;
  }

  private kill(f: Fighter, by: number) {
    if (f.dead) return;
    f.health = 0; f.action = 'dead'; f.actT = 0; f.attack = null; f.lastHitBy = by;
    this.emit({ type: 'death', pos: { ...f.pos }, target: f.id, attacker: by });
  }

  /** Lightweight snapshot used by the AI and HUD. */
  winner(): number | null {
    const alive = this.fighters.filter(f => !f.dead);
    const teams = new Set(alive.map(f => f.team));
    return teams.size === 1 ? [...teams][0] : teams.size === 0 ? -1 : null;
  }
}
export { ARMOR_SLOTS };
