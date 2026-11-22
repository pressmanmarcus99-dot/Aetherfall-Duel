import { clamp, dist2D, fwd, makeRng, rightOf, wrapAngle, yawTo } from '../core/math';
import type { Fighter } from '../combat/fighter';
import type { CombatWorld } from '../combat/world';
import { Intent, emptyIntent } from '../combat/types';

export type Difficulty = 'novice' | 'warrior' | 'veteran' | 'master';

/** Difficulty changes behaviour (perception, reactions, discipline), not HP or damage. */
interface Profile {
  reaction: number;      // seconds before it notices a telegraphed attack
  aggression: number;    // 0..1 how often it commits
  block: number;         // chance to defend a read attack by blocking
  parry: number;         // chance (given block) to time a parry
  dodge: number;         // chance to dodge a read attack
  staminaFloor: number;  // won't attack below this
  tactic: number;        // seconds between tactic changes
  mistake: number;       // chance per decision to do something dumb
  punish: number;        // chance to punish a whiffed/recovering opponent
}
const PROFILES: Record<Difficulty, Profile> = {
  novice:  { reaction: 0.55, aggression: 0.35, block: 0.35, parry: 0.03, dodge: 0.15, staminaFloor: 5,  tactic: 5,   mistake: 0.25, punish: 0.2 },
  warrior: { reaction: 0.36, aggression: 0.55, block: 0.55, parry: 0.15, dodge: 0.35, staminaFloor: 20, tactic: 4,   mistake: 0.12, punish: 0.45 },
  veteran: { reaction: 0.22, aggression: 0.7,  block: 0.7,  parry: 0.4,  dodge: 0.55, staminaFloor: 28, tactic: 3,   mistake: 0.05, punish: 0.7 },
  master:  { reaction: 0.13, aggression: 0.82, block: 0.8,  parry: 0.65, dodge: 0.7,  staminaFloor: 34, tactic: 2.2, mistake: 0.015, punish: 0.9 },
};
type Tactic = 'pressure' | 'circle' | 'poke' | 'retreat' | 'bait';

/** AI produces the same Intent as a human; it never touches fighter internals except to read state. */
export class AIController {
  private p: Profile; private rng: () => number;
  private tactic: Tactic = 'circle'; private tacticT = 0; private strafe = 1; private strafeT = 0;
  private seen = new Map<number, number>();      // attacker windup start -> time noticed
  private reactT = -1; private reaction: 'block' | 'dodge' | 'parry' | 'none' = 'none';
  private thinkT = 0; private wantAtk: 'light' | 'heavy' | 'special' | null = null;
  private lastPhase = '';

  constructor(public me: Fighter, public difficulty: Difficulty, seed = 7) {
    this.p = PROFILES[difficulty]; this.rng = makeRng(seed + me.id * 131);
  }

  think(w: CombatWorld, dt: number): Intent {
    const me = this.me, it = emptyIntent();
    const foe = w.nearestEnemy(me);
    if (me.dead || !foe) return it;
    const dx = foe.pos.x - me.pos.x, dz = foe.pos.z - me.pos.z, d = Math.hypot(dx, dz) || 0.001;
    const toFoe = yawTo(dx, dz);
    it.faceYaw = toFoe;
    const nx = dx / d, nz = dz / d;
    const wep = me.weapon;
    const reach = this.bestReach(me);
    const ranged = wep.grip === 'bow';

    this.tacticT -= dt; this.strafeT -= dt; this.thinkT -= dt;
    if (this.tacticT <= 0) {
      this.tacticT = this.p.tactic * (0.7 + this.rng() * 0.6);
      const r = this.rng();
      const low = me.stamina < this.p.staminaFloor + 10 || me.health < 30;
      this.tactic = ranged ? (d < 5 ? 'retreat' : 'poke')
        : low ? (r < 0.6 ? 'retreat' : 'circle')
        : r < this.p.aggression * 0.55 ? 'pressure' : r < 0.7 ? 'circle' : r < 0.85 ? 'bait' : 'poke';
    }
    if (this.strafeT <= 0) { this.strafeT = 1 + this.rng() * 2; this.strafe = this.rng() < 0.5 ? -1 : 1; }

    // ---- reactive defence: notice the foe's attack after a reaction delay, then pick a response
    const foeAtk = foe.action === 'attack' && foe.attack ? foe.attack : null;
    const phaseKey = foeAtk ? foe.id + ':' + foe.comboIdx + ':' + foeAtk.move.id : '';
    if (foeAtk && foeAtk.phase === 'windup' && phaseKey !== this.lastPhase && d < reach + foeAtk.move.reach + 1.5) {
      this.lastPhase = phaseKey;
      this.reactT = this.p.reaction * (0.8 + this.rng() * 0.5);
      const r = this.rng();
      const wantsParry = r < this.p.parry && me.defense.parryWindow > 0 && !foeAtk.move.unparryable;
      this.reaction = wantsParry ? 'parry' : r < this.p.parry + this.p.block * 0.6 && !foeAtk.move.unparryable ? 'block'
        : this.rng() < this.p.dodge ? 'dodge' : (this.rng() < this.p.block ? 'block' : 'none');
      if (foeAtk.move.unparryable && this.reaction === 'block') this.reaction = 'dodge';
      if (!foeAtk.move.melee) this.reaction = this.rng() < this.p.dodge ? 'dodge' : 'block';
    }
    if (!foeAtk) { this.lastPhase = ''; if (this.reaction !== 'none' && this.reactT < -0.6) this.reaction = 'none'; }
    if (this.reactT > -1) this.reactT -= dt;

    const free = me.action === 'idle' || me.action === 'block';
    if (foeAtk && this.reaction !== 'none' && this.reactT <= 0 && this.reactT > -1) {
      if (this.reaction === 'dodge' && free) { it.dodgePressed = true; this.sideStep(it, me, nx, nz); this.reaction = 'none'; }
      else if (this.reaction === 'block' || this.reaction === 'parry') {
        it.blockHeld = true;
        // parry timing: press block just before the strike lands (end of windup)
        if (this.reaction === 'parry') {
          const left = foeAtk.phase === 'windup' ? foeAtk.dur - foeAtk.t : 0;
          if (me.action !== 'block' && left < me.defense.parryWindow * 0.8 && left > 0) { it.blockPressed = true; this.reaction = 'block'; }
          else it.blockHeld = me.action === 'block' || left < 0.25;
        }
      }
    }
    if (it.blockHeld || it.dodgePressed) { this.moveBy(it, 0, 0); return this.finish(it, d); }

    // ---- punish: opponent recovering, staggered, or parried
    const foeVuln = foe.action === 'stagger' || (foeAtk?.phase === 'recovery') || foe.action === 'switch';
    const inRange = d < reach;
    if (foeVuln && free && this.rng() < this.p.punish * dt * 8) {
      if (inRange) { this.attackNow(it, me, foe, d); return this.finish(it, d); }
      this.moveBy(it, nx, nz, true);
      return this.finish(it, d);
    }
    // riposte after successful parry
    if (me.riposteT > 0 && free && d < reach + 0.5) { it.lightPressed = true; return this.finish(it, d); }

    // ---- tactic movement + attack decisions
    const ideal = ranged ? 8 : Math.max(1.6, reach * 0.85);
    switch (this.tactic) {
      case 'pressure': this.moveBy(it, nx, nz); if (d > ideal + 0.4) it.sprint = d > ideal + 3 && me.stamina > this.p.staminaFloor; break;
      case 'circle': { const s = rightOf(toFoe); const k = this.strafe; const push = d > ideal + 1 ? 0.7 : d < ideal - 0.6 ? -0.5 : 0; this.moveBy(it, s.x * k + nx * push, s.z * k + nz * push); break; }
      case 'bait': { const push = d > ideal + 1.6 ? 0.8 : d < ideal + 0.8 ? -0.6 : 0; this.moveBy(it, nx * push, nz * push); break; }
      case 'poke': { const push = d > ideal ? 0.8 : d < ideal - 0.5 ? -0.8 : 0; this.moveBy(it, nx * push, nz * push); break; }
      case 'retreat': { const s = rightOf(toFoe); this.moveBy(it, -nx * 0.8 + s.x * this.strafe * 0.4, -nz * 0.8 + s.z * this.strafe * 0.4); break; }
    }
    // keep off the wall
    const rr = Math.hypot(me.pos.x, me.pos.z);
    if (rr > 12.5) this.moveBy(it, -me.pos.x / rr, -me.pos.z / rr);

    // opportunistic jump (aerial dodge of ground waves)
    const wave = w.projectiles.find(pr => pr.wave && pr.team !== me.team && dist2D(pr.pos, me.pos) < 4);
    if (wave && free && this.rng() < 0.12 + this.p.dodge * 0.3) it.jumpPressed = true;

    // attack decision
    if (free && this.thinkT <= 0) {
      this.thinkT = (0.25 + this.rng() * 0.5) * (1.6 - this.p.aggression);
      const canAtk = me.stamina > this.p.staminaFloor && me.action !== 'block';
      const mistake = this.rng() < this.p.mistake;
      if (mistake && d < reach + 1) { this.moveBy(it, 0, 0); }
      else if (canAtk && (inRange || (ranged && d > 3 && d < 14)) && this.rng() < this.p.aggression && this.tactic !== 'retreat') {
        this.attackNow(it, me, foe, d);
      }
    }
    // mid-combo continuation
    if (me.action === 'attack' && me.attack?.phase === 'recovery' && inRange && me.stamina > this.p.staminaFloor && this.rng() < this.p.aggression * dt * 3 && me.comboIdx < wep.light.length) it.lightPressed = true;
    // weapon switching when out of reach or bow at point blank
    if (free && me.action === 'idle' && this.rng() < dt * 0.15) {
      const other = me.slot === 'main' ? me.loadout.secondary : me.loadout.main;
      if (other !== wep.id && ((ranged && d < 3) || (!ranged && d > 8 && other === 'bow'))) it.switchTo = 3;
    }
    return this.finish(it, d);
  }

  private attackNow(it: Intent, me: Fighter, foe: Fighter, d: number) {
    const w = me.weapon, r = this.rng();
    const sp = w.special;
    const specialReady = me.specialCd <= 0 && me.stamina >= sp.stamina && (sp.fx?.type !== 'pulse' || me.counterCharge >= 1);
    if (specialReady && (
      (sp.fx?.type === 'ward' && (me.health < 70 || d < 4) && r < 0.5) ||
      (sp.fx?.type === 'burst' && d < (sp.fx.radius ?? 3) && r < 0.5) ||
      (sp.fx?.type === 'pulse' && d < (sp.fx.radius ?? 3)) ||
      ((sp.fx?.type === 'projectile' || sp.fx?.type === 'wave') && d > 3.5 && r < 0.45) ||
      (!sp.fx && d < w.light[0].reach + 1 && r < 0.3) ||
      (sp.lunge > 0 && d > 3 && r < 0.4))) { it.specialPressed = true; return; }
    const heavyOk = me.stamina > w.heavy.stamina + this.p.staminaFloor;
    const foeBlocking = foe.action === 'block';
    if (heavyOk && ((foeBlocking && r < 0.55) || r < 0.2 + (1 - this.p.aggression) * 0.1)) it.heavyPressed = true;
    else it.lightPressed = true;
    // slightly bias toward the foe so thrusts lunge
    it.move.x += 0; it.move.z += 0;
  }

  private bestReach(me: Fighter) { const w = me.weapon; return w.light[0].reach + 0.7 + (w.light[0].lunge > 0 ? 0.6 : 0); }
  private moveBy(it: Intent, x: number, z: number, sprint = false) {
    const m = Math.hypot(x, z);
    if (m < 1e-4) { it.move.x = 0; it.move.z = 0; return; }
    const k = Math.min(1, m); it.move.x = (x / m) * k; it.move.z = (z / m) * k; if (sprint) it.sprint = true;
  }
  private sideStep(it: Intent, me: Fighter, nx: number, nz: number) {
    const s = this.strafe;
    it.move.x = -nz * s + nx * -0.2; it.move.z = nx * s + nz * -0.2;     // perpendicular to the foe, slightly back
    const m = Math.hypot(it.move.x, it.move.z) || 1; it.move.x /= m; it.move.z /= m;
  }
  private finish(it: Intent, _d: number): Intent {
    it.move.x = clamp(it.move.x, -1, 1); it.move.z = clamp(it.move.z, -1, 1);
    return it;
  }
}
export { fwd, wrapAngle };
