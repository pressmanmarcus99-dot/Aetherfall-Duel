import type { V3 } from '../core/math';
import type { ArmorSlot } from '../armor/armor';
import type { DamageType, Element, OnHit } from '../weapons/types';

/** Everything a controller (keyboard, AI, future network/phone pad) can ask a fighter to do this tick. */
export interface Intent {
  move: { x: number; z: number };   // world-space desired direction, length <= 1
  faceYaw: number;                  // where the fighter wants to look
  sprint: boolean; blockHeld: boolean;
  jumpPressed: boolean; dodgePressed: boolean;
  lightPressed: boolean; heavyPressed: boolean; specialPressed: boolean; blockPressed: boolean;
  switchTo: 0 | 1 | 2 | 3;          // 1 main, 2 secondary, 3 toggle
}
export const emptyIntent = (): Intent => ({ move: { x: 0, z: 0 }, faceYaw: 0, sprint: false, blockHeld: false,
  jumpPressed: false, dodgePressed: false, lightPressed: false, heavyPressed: false, specialPressed: false, blockPressed: false, switchTo: 0 });

export type EventType = 'swing' | 'hit' | 'block' | 'parry' | 'dodge' | 'guardbreak' | 'clang' | 'projectile' | 'special'
  | 'land' | 'jump' | 'step' | 'death' | 'armorbreak' | 'switch' | 'ward' | 'burst' | 'wave' | 'pulse' | 'dash' | 'riposte';
export interface CombatEvent {
  type: EventType; pos: V3; attacker?: number; target?: number; element?: Element; heavy?: boolean;
  dmg?: number; weaponId?: string; zone?: ArmorSlot; dir?: V3; radius?: number; blocked?: boolean;
}

/** Immutable description of one damaging effect, produced from a move (or projectile / burst). */
export interface HitSpec {
  damage: number; type: DamageType; poise: number; knock: number; armorPierce: number; armorBreak: number;
  unparryable: boolean; hitStop: number; heavy: boolean; element: Element; onHit: OnHit; weaponId: string;
  ranged: boolean; riposte: boolean;
}
