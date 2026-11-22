import type { MoveDef, SwingStyle } from '../weapons/types';
import { easeInOut, easeOut, lerp } from '../core/math';

/**
 * Weapon trajectory in the fighter's local frame: x = fighter's right, y = up, z = forward.
 * Used by BOTH the hit detection (combat/world.ts) and the visual animation (characters/animator.ts)
 * so what you see is exactly what collides.
 */
export interface SwingPose { dx: number; dy: number; dz: number; extend: number }
export type AttackPhase = 'windup' | 'active' | 'recovery';

const NEUTRAL: SwingPose = norm({ dx: 0.25, dy: 0.55, dz: 0.5, extend: 1 });
function norm(p: SwingPose): SwingPose { const l = Math.hypot(p.dx, p.dy, p.dz) || 1; return { dx: p.dx / l, dy: p.dy / l, dz: p.dz / l, extend: p.extend }; }
const horiz = (theta: number, y: number, extend = 1): SwingPose => norm({ dx: Math.sin(theta), dy: y, dz: Math.cos(theta), extend });
const mix = (a: SwingPose, b: SwingPose, t: number): SwingPose => norm({ dx: lerp(a.dx, b.dx, t), dy: lerp(a.dy, b.dy, t), dz: lerp(a.dz, b.dz, t), extend: lerp(a.extend, b.extend, t) });

/** Start (cocked) and end (follow-through) poses for each swing style. sign = +1: right->left, -1: left->right. */
function endpoints(style: SwingStyle, arc: number, sign: number): [SwingPose, SwingPose] {
  switch (style) {
    case 'slash': return [horiz(arc * sign, 0.12), horiz(-arc * sign, 0.12)];
    case 'diag': return [horiz(arc * 0.6 * sign, 0.8), horiz(-arc * 0.6 * sign, -0.35)];
    case 'sweep': return [horiz(arc * sign, -0.22), horiz(-arc * sign, -0.22)];
    case 'overhead': case 'smash': return [norm({ dx: 0, dy: 1, dz: -0.35, extend: 1 }), norm({ dx: 0, dy: -0.3, dz: 1, extend: 1 })];
    case 'thrust': case 'punch': case 'bash': return [norm({ dx: 0.12 * sign, dy: 0.05, dz: 0.25, extend: 0.3 }), norm({ dx: 0, dy: 0.06, dz: 1, extend: 1 })];
    case 'spin': return [horiz(-Math.PI * sign, 0.1), horiz(Math.PI * sign, 0.1)];
    case 'shoot': return [norm({ dx: 0, dy: 0.05, dz: 1, extend: 1 }), norm({ dx: 0, dy: 0.05, dz: 1, extend: 1 })];
  }
}

export function swingPose(m: Pick<MoveDef, 'style' | 'arc'>, phase: AttackPhase, p: number, sign: number): SwingPose {
  const [start, end] = endpoints(m.style, m.arc, sign);
  if (phase === 'windup') return mix(NEUTRAL, start, easeOut(Math.min(1, p)));
  if (phase === 'active') return mix(start, end, easeInOut(Math.min(1, p)));
  return mix(end, NEUTRAL, easeOut(Math.min(1, p)));
}
export { NEUTRAL as NEUTRAL_POSE };
