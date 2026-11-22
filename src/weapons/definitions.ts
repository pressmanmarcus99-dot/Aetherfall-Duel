import type { Defense, MoveDef, MoveKind, WeaponDef } from './types';

/**
 * Pure data. Models live in weapons/models.ts and are looked up by weapon id, so Tripo GLBs
 * can be dropped in (see assets/registry.ts) without touching any combat number.
 */
type MoveIn = Partial<MoveDef> & Pick<MoveDef, 'id' | 'name' | 'style' | 'windup' | 'active' | 'recovery' | 'damage' | 'stamina' | 'reach'>;
const mv = (kind: MoveKind, o: MoveIn): MoveDef => ({
  kind, arc: 1.0, radius: 0.18, poise: 14, knock: 1.6, lunge: 0, hitStop: kind === 'heavy' ? 0.09 : 0.05,
  melee: true, multi: 1, armorPierce: 0, armorBreak: 1, unparryable: false, cooldown: kind === 'special' ? 8 : 0, ...o,
});
const L = (o: MoveIn) => mv('light', o), H = (o: MoveIn) => mv('heavy', o), S = (o: MoveIn) => mv('special', o);
const def = (blockReduction: number, blockStamina: number, parryWindow: number, blockArc: number, counterPulse = false): Defense =>
  ({ blockReduction, blockStamina, parryWindow, blockArc, counterPulse });

const W: WeaponDef[] = [
  // ---------------------------------------------------------------- PHYSICAL
  { id: 'greatsword', name: 'Greatsword', category: 'physical', grip: 'two', element: 'none', damageType: 'slash', length: 2.1, moveMult: 0.88, weight: 9, color: 0xb9c2cf,
    blurb: 'Powerful, slow, wide attacks. Heavy swings break stance.', defense: def(0.55, 1.0, 0.16, 1.0), onHit: {},
    light: [L({ id: 'gs_l1', name: 'Wide Cut', style: 'slash', windup: .30, active: .14, recovery: .40, damage: 14, stamina: 12, reach: 2.1, arc: 1.35, poise: 18, knock: 2.2, lunge: 1.5 }),
            L({ id: 'gs_l2', name: 'Rising Diagonal', style: 'diag', windup: .30, active: .14, recovery: .46, damage: 15, stamina: 12, reach: 2.1, arc: 1.3, poise: 18, knock: 2.2, lunge: 1.5 })],
    heavy: H({ id: 'gs_h', name: 'Executioner', style: 'overhead', windup: .60, active: .16, recovery: .65, damage: 30, stamina: 26, reach: 2.1, poise: 45, knock: 4, lunge: 3 }),
    special: S({ id: 'gs_s', name: 'Cleaving Whirl', style: 'spin', windup: .35, active: .50, recovery: .60, damage: 12, stamina: 30, reach: 2.1, arc: Math.PI, poise: 30, multi: 2, knock: 3, cooldown: 9 }) },

  { id: 'longsword', name: 'Longsword', category: 'physical', grip: 'one', element: 'none', damageType: 'slash', length: 1.5, moveMult: 1.0, weight: 4, color: 0xd5dbe6,
    blurb: 'Balanced offense and defense. Reliable parries.', defense: def(0.65, 0.8, 0.22, 1.1), onHit: {},
    light: [L({ id: 'ls_l1', name: 'Slash', style: 'slash', windup: .20, active: .12, recovery: .30, damage: 10, stamina: 9, reach: 1.5 }),
            L({ id: 'ls_l2', name: 'Back Slash', style: 'diag', windup: .20, active: .12, recovery: .30, damage: 10, stamina: 9, reach: 1.5 }),
            L({ id: 'ls_l3', name: 'Thrust', style: 'thrust', windup: .24, active: .10, recovery: .42, damage: 13, stamina: 11, reach: 1.6, lunge: 2.5, radius: .14 })],
    heavy: H({ id: 'ls_h', name: 'Overhead Cut', style: 'overhead', windup: .42, active: .14, recovery: .50, damage: 22, stamina: 20, reach: 1.5, poise: 32, lunge: 2.5 }),
    special: S({ id: 'ls_s', name: 'Rising Cut', style: 'diag', windup: .30, active: .14, recovery: .50, damage: 20, stamina: 22, reach: 1.6, lunge: 6, poise: 30, cooldown: 7 }) },

  { id: 'rapier', name: 'Rapier', category: 'physical', grip: 'one', element: 'none', damageType: 'pierce', length: 1.9, moveMult: 1.05, weight: 2, color: 0xe3e8f0,
    blurb: 'Fast thrusts with the widest parry window and superb reach.', defense: def(0.45, 1.0, 0.28, 0.8), onHit: {},
    light: [L({ id: 'rp_l1', name: 'Thrust', style: 'thrust', windup: .16, active: .08, recovery: .26, damage: 8, stamina: 7, reach: 1.9, radius: .12, poise: 8, lunge: 1.5 }),
            L({ id: 'rp_l2', name: 'Double Thrust', style: 'thrust', windup: .14, active: .08, recovery: .26, damage: 8, stamina: 7, reach: 1.9, radius: .12, poise: 8, lunge: 1.5 })],
    heavy: H({ id: 'rp_h', name: 'Lunge', style: 'thrust', windup: .34, active: .10, recovery: .50, damage: 17, stamina: 16, reach: 1.9, radius: .12, poise: 22, lunge: 5, armorPierce: .2 }),
    special: S({ id: 'rp_s', name: 'Fleche', style: 'thrust', windup: .22, active: .12, recovery: .60, damage: 18, stamina: 20, reach: 1.9, radius: .12, poise: 25, lunge: 9, armorPierce: .35, cooldown: 6 }) },

  { id: 'dagger', name: 'Dagger', category: 'physical', grip: 'one', element: 'none', damageType: 'pierce', length: 0.75, moveMult: 1.18, weight: 1, color: 0xc7ccd6,
    blurb: 'Extremely fast combinations and evasive footwork.', defense: def(0.3, 1.2, 0.12, 0.8), onHit: {},
    light: [L({ id: 'dg_l1', name: 'Stab', style: 'slash', windup: .12, active: .08, recovery: .20, damage: 5, stamina: 5, reach: .75, arc: .9, poise: 6, knock: .8, lunge: 1 }),
            L({ id: 'dg_l2', name: 'Reverse Stab', style: 'slash', windup: .12, active: .08, recovery: .20, damage: 5, stamina: 5, reach: .75, arc: .9, poise: 6, knock: .8, lunge: 1 }),
            L({ id: 'dg_l3', name: 'Rake', style: 'thrust', windup: .12, active: .08, recovery: .30, damage: 7, stamina: 6, reach: .8, poise: 8, lunge: 1.5 })],
    heavy: H({ id: 'dg_h', name: 'Gut Stab', style: 'thrust', windup: .22, active: .08, recovery: .35, damage: 12, stamina: 11, reach: .8, poise: 16, lunge: 3, armorPierce: .3 }),
    special: S({ id: 'dg_s', name: 'Flurry', style: 'slash', windup: .20, active: .40, recovery: .45, damage: 4, stamina: 22, reach: .8, arc: 1.0, multi: 4, poise: 8, lunge: 4, cooldown: 8, hitStop: .02 }) },

  { id: 'axe', name: 'Axe', category: 'physical', grip: 'one', element: 'none', damageType: 'slash', length: 1.3, moveMult: .96, weight: 5, color: 0x9aa3ad,
    blurb: 'Chopping blows that grind armor down.', defense: def(0.5, 1.0, 0.15, 1.0), onHit: {},
    light: [L({ id: 'ax_l1', name: 'Chop', style: 'diag', windup: .26, active: .13, recovery: .40, damage: 13, stamina: 11, reach: 1.3, armorPierce: .15, armorBreak: 1.6, poise: 16 }),
            L({ id: 'ax_l2', name: 'Backhand Chop', style: 'slash', windup: .26, active: .13, recovery: .40, damage: 13, stamina: 11, reach: 1.3, armorPierce: .15, armorBreak: 1.6, poise: 16 })],
    heavy: H({ id: 'ax_h', name: 'Splitting Blow', style: 'overhead', windup: .50, active: .15, recovery: .60, damage: 27, stamina: 22, reach: 1.3, poise: 35, armorPierce: .35, armorBreak: 2.5, lunge: 2.5 }),
    special: S({ id: 'ax_s', name: 'Rend Armor', style: 'overhead', windup: .45, active: .15, recovery: .65, damage: 28, stamina: 26, reach: 1.3, poise: 40, armorPierce: .6, armorBreak: 4, lunge: 3, cooldown: 8 }) },

  { id: 'spear', name: 'Spear', category: 'physical', grip: 'two', element: 'none', damageType: 'pierce', length: 2.4, moveMult: .98, weight: 4, color: 0x8a6a45,
    blurb: 'Excellent reach and directional thrusts.', defense: def(0.5, 1.0, 0.15, 0.8), onHit: {},
    light: [L({ id: 'sp_l1', name: 'Thrust', style: 'thrust', windup: .24, active: .11, recovery: .36, damage: 11, stamina: 10, reach: 2.4, radius: .12, poise: 12, lunge: 1.5 }),
            L({ id: 'sp_l2', name: 'Quick Thrust', style: 'thrust', windup: .20, active: .11, recovery: .36, damage: 11, stamina: 10, reach: 2.4, radius: .12, poise: 12, lunge: 1.5 })],
    heavy: H({ id: 'sp_h', name: 'Piercing Lunge', style: 'thrust', windup: .50, active: .12, recovery: .55, damage: 22, stamina: 20, reach: 2.4, radius: .12, poise: 30, lunge: 4 }),
    special: S({ id: 'sp_s', name: 'Impale', style: 'thrust', windup: .50, active: .14, recovery: .80, damage: 26, stamina: 26, reach: 2.4, radius: .14, poise: 50, lunge: 7, armorPierce: .4, cooldown: 9 }) },

  { id: 'polearm', name: 'Polearm', category: 'physical', grip: 'two', element: 'none', damageType: 'slash', length: 2.7, moveMult: .9, weight: 7, color: 0x8d8f97,
    blurb: 'Wide sweeps that control the whole space around you.', defense: def(0.5, 1.0, 0.14, 1.0), onHit: {},
    light: [L({ id: 'pa_l1', name: 'Sweep', style: 'sweep', windup: .38, active: .18, recovery: .50, damage: 14, stamina: 13, reach: 2.7, arc: 1.5, poise: 18, knock: 2.5 }),
            L({ id: 'pa_l2', name: 'Reverse Sweep', style: 'sweep', windup: .36, active: .18, recovery: .50, damage: 14, stamina: 13, reach: 2.7, arc: 1.5, poise: 18, knock: 2.5 })],
    heavy: H({ id: 'pa_h', name: 'Halberd Drop', style: 'overhead', windup: .60, active: .18, recovery: .70, damage: 26, stamina: 24, reach: 2.7, poise: 40, knock: 3.5 }),
    special: S({ id: 'pa_s', name: 'Reaping Arc', style: 'sweep', windup: .45, active: .30, recovery: .65, damage: 20, stamina: 26, reach: 2.9, arc: 2.4, poise: 40, knock: 4, cooldown: 8 }) },

  { id: 'hammer', name: 'Warhammer', category: 'physical', grip: 'two', element: 'none', damageType: 'blunt', length: 1.5, moveMult: .85, weight: 10, color: 0x7b7f8a,
    blurb: 'Devastating impacts that stagger and shatter armor.', defense: def(0.5, 1.0, 0.13, 0.9), onHit: { poiseDmg: 10 },
    light: [L({ id: 'hm_l1', name: 'Crush', style: 'diag', windup: .38, active: .14, recovery: .55, damage: 18, stamina: 15, reach: 1.5, poise: 30, armorBreak: 2, knock: 3 }),
            L({ id: 'hm_l2', name: 'Backswing', style: 'slash', windup: .36, active: .14, recovery: .55, damage: 18, stamina: 15, reach: 1.5, poise: 30, armorBreak: 2, knock: 3 })],
    heavy: H({ id: 'hm_h', name: 'Pulverize', style: 'smash', windup: .80, active: .20, recovery: .90, damage: 38, stamina: 32, reach: 1.5, poise: 70, armorBreak: 4, knock: 5, lunge: 2 }),
    special: S({ id: 'hm_s', name: 'Skull Crusher', style: 'smash', windup: .70, active: .18, recovery: .90, damage: 34, stamina: 30, reach: 1.5, poise: 100, armorBreak: 5, knock: 6, unparryable: true, cooldown: 10 }) },

  { id: 'dualblades', name: 'Dual Blades', category: 'physical', grip: 'dual', element: 'none', damageType: 'slash', length: 1.1, moveMult: 1.1, weight: 3, color: 0xcdd3de,
    blurb: 'Alternating strikes in rapid combinations.', defense: def(0.35, 1.1, 0.14, 0.9), onHit: {},
    light: [L({ id: 'db_l1', name: 'Right Cut', style: 'slash', windup: .14, active: .08, recovery: .22, damage: 7, stamina: 6, reach: 1.1, poise: 8, lunge: 1 }),
            L({ id: 'db_l2', name: 'Left Cut', style: 'slash', windup: .14, active: .08, recovery: .22, damage: 7, stamina: 6, reach: 1.1, poise: 8, lunge: 1 }),
            L({ id: 'db_l3', name: 'Right Rake', style: 'diag', windup: .14, active: .08, recovery: .22, damage: 7, stamina: 6, reach: 1.1, poise: 8, lunge: 1 }),
            L({ id: 'db_l4', name: 'Cross Finisher', style: 'sweep', windup: .18, active: .10, recovery: .40, damage: 11, stamina: 9, reach: 1.1, arc: 1.4, poise: 18 })],
    heavy: H({ id: 'db_h', name: 'Crossing Sweep', style: 'sweep', windup: .30, active: .12, recovery: .45, damage: 15, stamina: 15, reach: 1.1, arc: 1.5, poise: 24, knock: 3 }),
    special: S({ id: 'db_s', name: 'Whirling Blades', style: 'spin', windup: .22, active: .45, recovery: .50, damage: 8, stamina: 24, reach: 1.1, arc: Math.PI, multi: 3, poise: 12, cooldown: 8, hitStop: .03 }) },

  { id: 'bow', name: 'Longbow', category: 'physical', grip: 'bow', element: 'none', damageType: 'pierce', length: 0, moveMult: .95, weight: 2, color: 0x7b5a3a,
    blurb: 'Draw, aim and loose. Hold distance and punish approaches.', defense: def(0.15, 1.5, 0.08, 0.7), onHit: {},
    light: [L({ id: 'bw_l1', name: 'Quick Shot', style: 'shoot', windup: .35, active: .06, recovery: .35, damage: 9, stamina: 8, reach: 1, melee: false, poise: 8, fx: { type: 'projectile', speed: 32, gravity: 4, life: 2.2 } })],
    heavy: H({ id: 'bw_h', name: 'Full Draw', style: 'shoot', windup: .75, active: .06, recovery: .50, damage: 24, stamina: 18, reach: 1, melee: false, poise: 30, armorPierce: .2, fx: { type: 'projectile', speed: 44, gravity: 2, life: 2.2 } }),
    special: S({ id: 'bw_s', name: 'Triple Volley', style: 'shoot', windup: .50, active: .06, recovery: .55, damage: 10, stamina: 26, reach: 1, melee: false, poise: 10, cooldown: 8, fx: { type: 'projectile', speed: 34, count: 3, spread: .2, gravity: 4, life: 2.2 } }) },

  // ---------------------------------------------------------------- MAGICAL / TECH
  { id: 'flamesword', name: 'Flaming Sword', category: 'magical', grip: 'one', element: 'fire', damageType: 'fire', length: 1.7, moveMult: 1.0, weight: 4, color: 0xff6a2a,
    blurb: 'Fire-infused blade. Every hit leaves the target burning.', defense: def(0.6, 0.9, 0.2, 1.0), onHit: { burn: 3 },
    light: [L({ id: 'fs_l1', name: 'Ember Slash', style: 'slash', windup: .22, active: .13, recovery: .34, damage: 11, stamina: 10, reach: 1.7 }),
            L({ id: 'fs_l2', name: 'Cinder Rise', style: 'diag', windup: .22, active: .13, recovery: .34, damage: 11, stamina: 10, reach: 1.7 }),
            L({ id: 'fs_l3', name: 'Flare Thrust', style: 'thrust', windup: .26, active: .10, recovery: .42, damage: 13, stamina: 11, reach: 1.8, lunge: 2.5, radius: .14 })],
    heavy: H({ id: 'fs_h', name: 'Inferno Cleave', style: 'overhead', windup: .50, active: .15, recovery: .55, damage: 24, stamina: 22, reach: 1.7, poise: 35, lunge: 2.5 }),
    special: S({ id: 'fs_s', name: 'Fire Wave', style: 'slash', windup: .35, active: .14, recovery: .55, damage: 16, stamina: 24, reach: 1.7, poise: 30, cooldown: 8, fx: { type: 'wave', speed: 13, radius: .9, life: 1.2 } }) },

  { id: 'icelance', name: 'Frost Glaive', category: 'magical', grip: 'two', element: 'ice', damageType: 'frost', length: 2.2, moveMult: .96, weight: 5, color: 0x7fdcff,
    blurb: 'A rime-forged glaive. Cold slows what it touches.', defense: def(0.55, 1.0, 0.16, 0.9), onHit: { chill: 2.5 },
    light: [L({ id: 'ic_l1', name: 'Frost Thrust', style: 'thrust', windup: .24, active: .11, recovery: .36, damage: 10, stamina: 10, reach: 2.2, radius: .13, lunge: 1.5 }),
            L({ id: 'ic_l2', name: 'Glacial Sweep', style: 'sweep', windup: .32, active: .16, recovery: .44, damage: 12, stamina: 12, reach: 2.2, arc: 1.4 })],
    heavy: H({ id: 'ic_h', name: 'Avalanche', style: 'overhead', windup: .55, active: .16, recovery: .60, damage: 22, stamina: 22, reach: 2.2, poise: 35 }),
    special: S({ id: 'ic_s', name: 'Glacial Spikes', style: 'thrust', windup: .40, active: .12, recovery: .55, damage: 14, stamina: 24, reach: 2.2, radius: .13, poise: 25, cooldown: 8, fx: { type: 'wave', speed: 16, radius: .8, life: 1.1 } }) },

  { id: 'lightning', name: 'Lightning Gauntlets', category: 'magical', grip: 'gauntlet', element: 'lightning', damageType: 'shock', length: 0.6, moveMult: 1.1, weight: 3, color: 0xfff27a,
    blurb: 'Blinding close-range strikes. Shocks drain stamina.', defense: def(0.4, 1.0, 0.2, 0.9), onHit: { shock: 1, staminaDmg: 3 },
    light: [L({ id: 'lg_l1', name: 'Jab', style: 'punch', windup: .13, active: .08, recovery: .20, damage: 6, stamina: 5, reach: .6, radius: .22, poise: 8, lunge: 1.5 }),
            L({ id: 'lg_l2', name: 'Cross', style: 'punch', windup: .13, active: .08, recovery: .20, damage: 6, stamina: 5, reach: .6, radius: .22, poise: 8, lunge: 1.5 }),
            L({ id: 'lg_l3', name: 'Arc Hook', style: 'slash', windup: .16, active: .09, recovery: .34, damage: 9, stamina: 7, reach: .65, radius: .24, arc: .8, poise: 14, lunge: 1.5 })],
    heavy: H({ id: 'lg_h', name: 'Storm Strike', style: 'punch', windup: .30, active: .10, recovery: .45, damage: 16, stamina: 16, reach: .7, radius: .26, poise: 34, lunge: 3.5 }),
    special: S({ id: 'lg_s', name: 'Thunderclap', style: 'punch', windup: .30, active: .10, recovery: .55, damage: 18, stamina: 26, reach: .6, poise: 40, unparryable: true, cooldown: 9, fx: { type: 'burst', radius: 3.4 } }) },

  { id: 'windblades', name: 'Wind Blades', category: 'magical', grip: 'dual', element: 'wind', damageType: 'slash', length: 1.2, moveMult: 1.22, weight: 2, color: 0xa8ffd9,
    blurb: 'Gale-light twin blades with mobility bursts.', defense: def(0.3, 1.1, 0.14, 0.9), onHit: {},
    light: [L({ id: 'wb_l1', name: 'Gust Cut', style: 'slash', windup: .13, active: .09, recovery: .20, damage: 7, stamina: 6, reach: 1.2, lunge: 1.5, poise: 8 }),
            L({ id: 'wb_l2', name: 'Zephyr Cut', style: 'slash', windup: .13, active: .09, recovery: .20, damage: 7, stamina: 6, reach: 1.2, lunge: 1.5, poise: 8 }),
            L({ id: 'wb_l3', name: 'Cyclone Cut', style: 'diag', windup: .15, active: .09, recovery: .30, damage: 8, stamina: 7, reach: 1.2, lunge: 1.5, poise: 10 })],
    heavy: H({ id: 'wb_h', name: 'Tempest Sweep', style: 'sweep', windup: .30, active: .12, recovery: .42, damage: 14, stamina: 14, reach: 1.3, arc: 1.8, poise: 24, knock: 4 }),
    special: S({ id: 'wb_s', name: 'Gale Dash', style: 'slash', windup: .12, active: .20, recovery: .40, damage: 16, stamina: 20, reach: 1.3, lunge: 12, arc: 1.2, poise: 20, cooldown: 7, fx: { type: 'ward', ward: 0, dur: 3, haste: 0.25 } }) },

  { id: 'earthmaul', name: 'Earthen Maul', category: 'magical', grip: 'two', element: 'earth', damageType: 'blunt', length: 1.9, moveMult: .85, weight: 10, color: 0xa88a5a,
    blurb: 'Quarried stone head; blows shake the ground.', defense: def(0.55, 1.0, 0.13, 1.0), onHit: { poiseDmg: 12 },
    light: [L({ id: 'em_l1', name: 'Boulder Swing', style: 'diag', windup: .36, active: .14, recovery: .52, damage: 17, stamina: 15, reach: 1.9, poise: 32, knock: 3, armorBreak: 2 }),
            L({ id: 'em_l2', name: 'Rockslide', style: 'slash', windup: .36, active: .14, recovery: .52, damage: 17, stamina: 15, reach: 1.9, poise: 32, knock: 3, armorBreak: 2 })],
    heavy: H({ id: 'em_h', name: 'Seismic Slam', style: 'smash', windup: .75, active: .20, recovery: .85, damage: 34, stamina: 30, reach: 1.9, poise: 65, knock: 5, armorBreak: 3, fx: { type: 'wave', speed: 10, radius: 1.0, life: .7 } }),
    special: S({ id: 'em_s', name: 'Quake', style: 'smash', windup: .60, active: .18, recovery: .80, damage: 24, stamina: 28, reach: 1.9, poise: 60, knock: 5, cooldown: 10, fx: { type: 'wave', speed: 11, radius: 1.5, life: 1.6 } }) },

  { id: 'lightblade', name: 'Radiant Saber', category: 'magical', grip: 'one', element: 'light', damageType: 'energy', length: 1.5, moveMult: 1.02, weight: 3, color: 0xfff0b0,
    blurb: 'Precise radiant cuts and a protective ward.', defense: def(0.7, 0.75, 0.26, 1.2), onHit: { staminaDmg: 4 },
    light: [L({ id: 'lb_l1', name: 'Gleam', style: 'slash', windup: .20, active: .12, recovery: .30, damage: 10, stamina: 9, reach: 1.5 }),
            L({ id: 'lb_l2', name: 'Glint', style: 'diag', windup: .20, active: .12, recovery: .30, damage: 10, stamina: 9, reach: 1.5 }),
            L({ id: 'lb_l3', name: 'Piercing Ray', style: 'thrust', windup: .22, active: .10, recovery: .40, damage: 12, stamina: 10, reach: 1.7, radius: .12, lunge: 2.5 })],
    heavy: H({ id: 'lb_h', name: 'Dawnfall', style: 'overhead', windup: .42, active: .14, recovery: .50, damage: 20, stamina: 20, reach: 1.5, poise: 30, lunge: 2.5 }),
    special: S({ id: 'lb_s', name: 'Radiant Ward', style: 'slash', windup: .25, active: .10, recovery: .35, damage: 0, stamina: 20, reach: 1.5, melee: false, cooldown: 12, fx: { type: 'ward', ward: 28, dur: 4 } }) },

  { id: 'cyberblade', name: 'Plasma Piston Blade', category: 'magical', grip: 'one', element: 'energy', damageType: 'energy', length: 1.4, moveMult: .98, weight: 5, color: 0x58d8ff,
    blurb: 'Mechanical blade that vents energy bursts.', defense: def(0.55, 0.9, 0.16, 1.0), onHit: { staminaDmg: 5 },
    light: [L({ id: 'cb_l1', name: 'Servo Slash', style: 'slash', windup: .22, active: .12, recovery: .32, damage: 11, stamina: 10, reach: 1.4 }),
            L({ id: 'cb_l2', name: 'Piston Thrust', style: 'thrust', windup: .24, active: .10, recovery: .40, damage: 13, stamina: 11, reach: 1.5, radius: .14, lunge: 2.5 })],
    heavy: H({ id: 'cb_h', name: 'Overclock Strike', style: 'overhead', windup: .45, active: .14, recovery: .55, damage: 25, stamina: 22, reach: 1.4, poise: 35, lunge: 2.5 }),
    special: S({ id: 'cb_s', name: 'Plasma Burst', style: 'thrust', windup: .30, active: .08, recovery: .45, damage: 22, stamina: 24, reach: 1.4, poise: 30, cooldown: 7, fx: { type: 'projectile', speed: 30, radius: .35, gravity: 0, life: 1.4 } }) },

  { id: 'energyshield', name: 'Energy Shield', category: 'magical', grip: 'shield', element: 'energy', damageType: 'energy', length: 0.9, moveMult: .98, weight: 4, color: 0x58b0ff,
    blurb: 'Wide protective field. Blocks charge a counter pulse.', defense: def(0.85, 0.6, 0.24, 1.5, true), onHit: { staminaDmg: 3 },
    light: [L({ id: 'es_l1', name: 'Shield Bash', style: 'bash', windup: .24, active: .10, recovery: .40, damage: 7, stamina: 8, reach: .9, radius: .35, poise: 28, knock: 3, lunge: 1.5 })],
    heavy: H({ id: 'es_h', name: 'Pulse Slam', style: 'bash', windup: .50, active: .12, recovery: .60, damage: 12, stamina: 14, reach: 1.0, radius: .4, poise: 55, knock: 5, lunge: 2.5 }),
    special: S({ id: 'es_s', name: 'Counter Pulse', style: 'bash', windup: .18, active: .10, recovery: .40, damage: 12, stamina: 10, reach: .9, poise: 50, knock: 7, unparryable: true, cooldown: 3, fx: { type: 'pulse', radius: 3.0 } }) },
];

/** Non-numbered extra: a plain physical shield for the shield slot. */
const KITE: WeaponDef = { id: 'kiteshield', name: 'Kite Shield', category: 'physical', grip: 'shield', element: 'none', damageType: 'blunt', length: 0.9, moveMult: .96, weight: 6, color: 0x7a88a8,
  blurb: 'Solid steel shield. Reliable cover for one-handed weapons.', defense: def(0.75, 0.7, 0.2, 1.3), onHit: {},
  light: [L({ id: 'ks_l1', name: 'Shield Bash', style: 'bash', windup: .26, active: .10, recovery: .42, damage: 6, stamina: 8, reach: .9, radius: .35, poise: 28, knock: 3, lunge: 1.5 })],
  heavy: H({ id: 'ks_h', name: 'Heavy Bash', style: 'bash', windup: .50, active: .12, recovery: .60, damage: 10, stamina: 14, reach: 1.0, radius: .4, poise: 50, knock: 5, lunge: 2.5 }),
  special: S({ id: 'ks_s', name: 'Shield Charge', style: 'bash', windup: .30, active: .22, recovery: .55, damage: 12, stamina: 22, reach: .9, radius: .4, poise: 60, knock: 6, lunge: 8, cooldown: 8 }) };

export const WEAPONS: Record<string, WeaponDef> = {};
for (const w of [...W, KITE]) WEAPONS[w.id] = w;
/** The 18 planned weapons, in design order. */
export const WEAPON_ORDER: string[] = W.map(w => w.id);
export const SHIELD_IDS: string[] = ['kiteshield', 'energyshield'];
export const getWeapon = (id: string): WeaponDef => { const w = WEAPONS[id]; if (!w) throw new Error('Unknown weapon ' + id); return w; };
/** A shield may only be added to a one-handed main weapon. */
export const canUseShield = (mainId: string) => getWeapon(mainId).grip === 'one';
