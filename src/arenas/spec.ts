/** Collision-relevant description of an arena. The visual builder (arenas/colosseum.ts) must match it. */
export interface Collider { x: number; z: number; r: number; h: number }
export interface ArenaSpec {
  id: string; name: string;
  radius: number;                 // circular fighting floor
  colliders: Collider[];          // static cylinders (pillars, braziers)
  spawns: { x: number; z: number; yaw: number }[];
}

/** Colosseum: 15m floor, four brazier plinths inside the ring act as real obstacles. */
export const COLOSSEUM: ArenaSpec = (() => {
  const colliders: Collider[] = [];
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + i * Math.PI / 2;
    colliders.push({ x: Math.sin(a) * 9.5, z: Math.cos(a) * 9.5, r: 0.7, h: 1.6 });
  }
  return { id: 'colosseum', name: 'The Sunken Colosseum', radius: 15, colliders,
    spawns: [{ x: 0, z: -5, yaw: 0 }, { x: 0, z: 5, yaw: Math.PI }] };
})();
