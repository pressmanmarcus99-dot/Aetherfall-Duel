import type { DamageType } from '../weapons/types';

export type ArmorSlot = 'head' | 'chest' | 'arms' | 'legs';
export const ARMOR_SLOTS: ArmorSlot[] = ['head', 'chest', 'arms', 'legs'];

export interface ArmorDef {
  id: string; name: string; slot: ArmorSlot; tier: 'light' | 'medium' | 'heavy';
  weight: number; durability: number;
  coverage: number;                          // 0..1, how much of the zone is protected (scales resistance)
  resist: Partial<Record<DamageType, number>>;
  poise: number;                             // stagger resistance contribution
  trait?: string;                            // human-readable special property
  look: { color: number; trim: number; style: string };
}

const P = (slot: ArmorSlot, tier: ArmorDef['tier'], name: string, weight: number, durability: number, coverage: number,
  base: [number, number, number, number], poise: number, color: number, trim: number, trait?: string): ArmorDef => ({
  id: `${slot}_${tier}`, name, slot, tier, weight, durability, coverage, poise, trait, look: { color, trim, style: `${slot}_${tier}` },
  // base = [slash, pierce, blunt, magic]
  resist: { slash: base[0], pierce: base[1], blunt: base[2], fire: base[3], frost: base[3], shock: base[3], energy: base[3] },
});

export const ARMORS: ArmorDef[] = [
  P('head', 'light', 'Stalker Hood', 1, 40, .6, [.10, .08, .05, .05], 0, 0x3a3f4a, 0x8a6f3a, 'Light: no stamina penalty'),
  P('head', 'medium', 'Vanguard Helm', 3, 80, .8, [.20, .18, .14, .08], 2, 0x4b5365, 0xc9a24a),
  P('head', 'heavy', 'Bastion Greathelm', 6, 140, 1.0, [.32, .30, .26, .12], 5, 0x59606e, 0xd8d8e0, 'Heavy: strongest vs blunt'),
  P('chest', 'light', 'Stalker Jerkin', 3, 70, .7, [.12, .08, .06, .08], 0, 0x39404c, 0x8a6f3a),
  P('chest', 'medium', 'Vanguard Cuirass', 8, 150, .9, [.26, .22, .16, .12], 4, 0x4b5365, 0xc9a24a),
  P('chest', 'heavy', 'Bastion Plate', 14, 260, 1.0, [.40, .36, .30, .16], 9, 0x59606e, 0xd8d8e0, 'Heavy: slows stamina regen'),
  P('arms', 'light', 'Stalker Bracers', 1, 40, .6, [.08, .06, .04, .04], 0, 0x3a3f4a, 0x8a6f3a),
  P('arms', 'medium', 'Vanguard Vambraces', 3, 80, .8, [.16, .14, .10, .06], 2, 0x4b5365, 0xc9a24a),
  P('arms', 'heavy', 'Bastion Gauntlets', 5, 130, 1.0, [.26, .24, .20, .10], 4, 0x59606e, 0xd8d8e0),
  P('legs', 'light', 'Stalker Greaves', 2, 50, .7, [.08, .06, .04, .04], 0, 0x3a3f4a, 0x8a6f3a),
  P('legs', 'medium', 'Vanguard Greaves', 5, 100, .85, [.18, .16, .12, .08], 3, 0x4b5365, 0xc9a24a),
  P('legs', 'heavy', 'Bastion Legplates', 9, 180, 1.0, [.28, .26, .22, .12], 6, 0x59606e, 0xd8d8e0),
];
export const getArmor = (id: string): ArmorDef => { const a = ARMORS.find(x => x.id === id); if (!a) throw new Error('Unknown armor ' + id); return a; };
export const armorFor = (slot: ArmorSlot) => ARMORS.filter(a => a.slot === slot);
export const DEFAULT_ARMOR: Record<ArmorSlot, string> = { head: 'head_medium', chest: 'chest_medium', arms: 'arms_medium', legs: 'legs_medium' };

/** Live, mutable per-fighter armor state. */
export interface ArmorState { def: ArmorDef; dur: number; broken: boolean }
export const makeArmor = (ids: Record<ArmorSlot, string>): Record<ArmorSlot, ArmorState> => {
  const o = {} as Record<ArmorSlot, ArmorState>;
  for (const s of ARMOR_SLOTS) { const d = getArmor(ids[s]); o[s] = { def: d, dur: d.durability, broken: false }; }
  return o;
};
/** Effective resistance of a piece: scales with coverage and wear (a half-worn piece gives 75%). */
export const pieceResist = (a: ArmorState, type: DamageType) =>
  a.broken ? 0 : (a.def.resist[type] ?? 0) * a.def.coverage * (0.5 + 0.5 * (a.dur / a.def.durability));
export const totalWeight = (a: Record<ArmorSlot, ArmorState>) => ARMOR_SLOTS.reduce((s, k) => s + a[k].def.weight, 0);
export const totalPoise = (a: Record<ArmorSlot, ArmorState>) => ARMOR_SLOTS.reduce((s, k) => s + (a[k].broken ? 0 : a[k].def.poise), 0);
