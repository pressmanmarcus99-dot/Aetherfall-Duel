import { V3, v3 } from '../core/math';
import { ARMOR_SLOTS, ArmorSlot, ArmorState, DEFAULT_ARMOR, makeArmor, totalPoise, totalWeight } from '../armor/armor';
import { canUseShield, getWeapon } from '../weapons/definitions';
import type { Defense, MoveDef, WeaponDef } from '../weapons/types';
import type { AttackPhase } from './swing';
import type { HitSpec } from './types';

export interface Loadout { main: string; secondary: string; shield: string | null; armor: Record<ArmorSlot, string> }
export const defaultLoadout = (): Loadout => ({ main: 'longsword', secondary: 'greatsword', shield: null, armor: { ...DEFAULT_ARMOR } });

export type ActionKind = 'idle' | 'attack' | 'block' | 'dodge' | 'stagger' | 'switch' | 'dead';
export interface AttackState {
  move: MoveDef; weapon: WeaponDef; phase: AttackPhase; t: number; dur: number;
  sign: number; handSide: number; hit: Set<number>; spec: HitSpec; riposte: boolean; lastP: number; group: number; lunged: boolean; clanged: boolean;
}
export interface Statuses { burn: number; burnT: number; chillT: number; shockT: number; hasteT: number; haste: number; wardHp: number; wardT: number }

let nextFighterId = 1;
export class Fighter {
  readonly id = nextFighterId++;
  pos: V3; vel: V3 = v3(); yaw: number; onGround = true; groundedT = 0; landT = 0;
  maxHealth = 100; health = 100; maxStamina = 100; stamina = 100; staminaDelay = 0;
  maxPoise = 40; poise = 40; poiseDelay = 0;
  armor: Record<ArmorSlot, ArmorState>;
  slot: 'main' | 'secondary' = 'main';
  action: ActionKind = 'idle'; actT = 0;
  attack: AttackState | null = null; comboIdx = 0; comboT = 0;
  buffer: { kind: 'light' | 'heavy' | 'special'; t: number } | null = null;
  blockCd = 0; parryT = 0; riposteT = 0; counterCharge = 0;
  dodgeT = 0; dodgeDur = 0; dodgeBack = false; dodgeDirX = 0; dodgeDirZ = 0;
  staggerT = 0; staggerKind: 'hit' | 'parried' | 'guardbreak' = 'hit'; switchT = 0;
  specialCd = 0;
  st: Statuses = { burn: 0, burnT: 0, chillT: 0, shockT: 0, hasteT: 0, haste: 0, wardHp: 0, wardT: 0 };
  lockTarget = -1; sprinting = false; burnAcc = 0; stepAcc = 0; lastHitBy = -1;

  constructor(public name: string, public team: number, public loadout: Loadout, spawn: { x: number; z: number; yaw: number }) {
    this.pos = v3(spawn.x, 0, spawn.z); this.yaw = spawn.yaw;
    this.armor = makeArmor(loadout.armor);
    this.maxPoise = 40 + totalPoise(this.armor); this.poise = this.maxPoise;
  }

  get dead() { return this.action === 'dead'; }
  get weapon(): WeaponDef { return getWeapon(this.slot === 'main' ? this.loadout.main : this.loadout.secondary); }
  /** The shield actually in use: only with a one-handed weapon, or a shield wielded as the main weapon. */
  get shield(): WeaponDef | null {
    const w = this.weapon;
    if (w.grip === 'shield') return w;
    return this.loadout.shield && canUseShield(w.id) ? getWeapon(this.loadout.shield) : null;
  }
  get defense(): Defense {
    const w = this.weapon.defense, s = this.shield?.defense;
    return s && s.blockReduction >= w.blockReduction ? s : w;
  }
  /** Armor weight slows you and slows stamina recovery. */
  get weight() { return totalWeight(this.armor) + this.weapon.weight; }
  get moveSpeedMult() {
    let m = this.weapon.moveMult * (1 - Math.min(0.22, totalWeight(this.armor) * 0.0045));
    if (this.st.chillT > 0) m *= 0.6; if (this.st.hasteT > 0) m *= 1 + this.st.haste;
    return m;
  }
  get attackSpeed() { return (this.st.hasteT > 0 ? 1 + this.st.haste * 0.5 : 1) * (this.st.chillT > 0 ? 0.85 : 1); }
  get staggerResist() { return totalPoise(this.armor); }
  get staminaRegen() { return Math.max(14, 28 - totalWeight(this.armor) * 0.35); }
  get forward() { return { x: Math.sin(this.yaw), z: Math.cos(this.yaw) }; }
  get right() { return { x: -Math.cos(this.yaw), z: Math.sin(this.yaw) }; }
  armorIntegrity() { return ARMOR_SLOTS.reduce((s, k) => s + this.armor[k].dur / this.armor[k].def.durability, 0) / 4; }
  spendStamina(n: number, delay = 0.9) { this.stamina = Math.max(0, this.stamina - n); this.staminaDelay = Math.max(this.staminaDelay, delay); }
}
