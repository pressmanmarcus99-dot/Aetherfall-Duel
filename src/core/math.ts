/** Plain math helpers. No three.js dependency: the simulation must stay renderer-free. */
export interface V3 { x: number; y: number; z: number }
export const TAU = Math.PI * 2;
export const v3 = (x = 0, y = 0, z = 0): V3 => ({ x, y, z });
export const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const wrapAngle = (a: number) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
export const lerpAngle = (a: number, b: number, t: number) => a + wrapAngle(b - a) * t;
export const easeOut = (t: number) => 1 - (1 - t) * (1 - t);
export const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
/** Facing convention: yaw 0 looks down +Z, yaw 90deg looks down +X (matches three.js rotation.y). */
export const fwd = (yaw: number) => ({ x: Math.sin(yaw), z: Math.cos(yaw) });
/** Character's right-hand side in world XZ. */
export const rightOf = (yaw: number) => ({ x: -Math.cos(yaw), z: Math.sin(yaw) });
export const yawTo = (dx: number, dz: number) => Math.atan2(dx, dz);
export const dist2D = (a: V3, b: V3) => Math.hypot(a.x - b.x, a.z - b.z);
export const dot3 = (a: V3, b: V3) => a.x * b.x + a.y * b.y + a.z * b.z;
const sub = (a: V3, b: V3): V3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });

/** Squared distance between segments p1-q1 and p2-q2 (Ericson, Real-Time Collision Detection). */
export function segSegDistSq(p1: V3, q1: V3, p2: V3, q2: V3): number {
  const d1 = sub(q1, p1), d2 = sub(q2, p2), r = sub(p1, p2);
  const a = dot3(d1, d1), e = dot3(d2, d2), f = dot3(d2, r), EPS = 1e-8;
  let s: number, t: number;
  if (a <= EPS && e <= EPS) { s = 0; t = 0; }
  else if (a <= EPS) { s = 0; t = clamp(f / e, 0, 1); }
  else {
    const c = dot3(d1, r);
    if (e <= EPS) { t = 0; s = clamp(-c / a, 0, 1); }
    else {
      const b = dot3(d1, d2), denom = a * e - b * b;
      s = denom > EPS ? clamp((b * f - c * e) / denom, 0, 1) : 0;
      t = (b * s + f) / e;
      if (t < 0) { t = 0; s = clamp(-c / a, 0, 1); }
      else if (t > 1) { t = 1; s = clamp((b - c) / a, 0, 1); }
    }
  }
  const c1 = { x: p1.x + d1.x * s, y: p1.y + d1.y * s, z: p1.z + d1.z * s };
  const c2 = { x: p2.x + d2.x * t, y: p2.y + d2.y * t, z: p2.z + d2.z * t };
  const d = sub(c1, c2);
  return dot3(d, d);
}

/** Small deterministic PRNG (mulberry32) so simulations are reproducible, as multiplayer will need. */
export function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
