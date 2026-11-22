export type Element = 'none' | 'fire' | 'ice' | 'lightning' | 'wind' | 'earth' | 'light' | 'energy';
export type DamageType = 'slash' | 'pierce' | 'blunt' | 'fire' | 'frost' | 'shock' | 'energy';
export type Grip = 'one' | 'two' | 'dual' | 'gauntlet' | 'bow' | 'shield';
export type SwingStyle = 'slash' | 'diag' | 'sweep' | 'overhead' | 'smash' | 'thrust' | 'punch' | 'bash' | 'spin' | 'shoot';
export type MoveKind = 'light' | 'heavy' | 'special';

export interface OnHit { burn?: number; chill?: number; shock?: number; staminaDmg?: number; poiseDmg?: number }

export interface MoveFx {
  type: 'projectile' | 'wave' | 'burst' | 'ward' | 'pulse';
  speed?: number; count?: number; spread?: number; radius?: number; life?: number; gravity?: number;
  ward?: number; dur?: number; haste?: number;
}

export interface MoveDef {
  id: string; name: string; kind: MoveKind; style: SwingStyle;
  windup: number; active: number; recovery: number;   // seconds at attack speed 1
  damage: number; stamina: number;
  reach: number;          // blade/arm length from the grip
  arc: number;            // half-angle of the swing (rad)
  radius: number;         // thickness of the swept weapon volume
  poise: number;          // poise damage (stagger pressure)
  knock: number;          // knockback impulse
  lunge: number;          // forward impulse at active start
  hitStop: number;
  melee: boolean;         // false => damage comes only from fx (projectile weapons)
  multi: number;          // distinct hit groups inside the active window
  armorPierce: number;    // fraction of armor resistance ignored
  armorBreak: number;     // multiplier on armor durability loss
  unparryable: boolean;
  cooldown: number;       // specials only
  fx?: MoveFx;
}

export interface Defense {
  blockReduction: number; // fraction of damage prevented while blocking
  blockStamina: number;   // stamina lost per point of incoming damage
  parryWindow: number;    // seconds after pressing block that a parry is possible
  blockArc: number;       // half-angle of protected cone (rad)
  counterPulse?: boolean; // energy shield: blocks charge a counter pulse
}

export interface WeaponDef {
  id: string; name: string; blurb: string;
  category: 'physical' | 'magical';
  grip: Grip; element: Element; damageType: DamageType;
  length: number;         // visual + default reach
  moveMult: number;       // movement speed multiplier while wielded
  weight: number;
  defense: Defense;
  onHit: OnHit;
  light: MoveDef[];       // combo chain
  heavy: MoveDef;
  special: MoveDef;
  color: number;          // base tint for the procedural model
}
