import { clamp, lerpAngle, wrapAngle } from '../core/math';
import type { Fighter } from '../combat/fighter';
import type { Intent } from '../combat/types';
import type { ArenaSpec } from '../arenas/spec';

export const MOVE = {
  walk: 3.4, run: 6.2, backMult: 0.8, accelGround: 38, accelAir: 9, friction: 30, attackFriction: 12,
  gravity: 28, jump: 9.2, coyote: 0.1, sprintCost: 8, bodyRadius: 0.45, jumpCost: 6,
};

/** Fraction of locomotion speed allowed in each action. */
function actionMoveMult(f: Fighter): number {
  switch (f.action) {
    case 'attack': { const p = f.attack!.phase; return p === 'windup' ? 0.35 : p === 'active' ? 0.2 : 0.5; }
    case 'block': return 0.45;
    case 'switch': return 0.6;
    case 'dodge': case 'stagger': case 'dead': return 0;
    default: return 1;
  }
}
/** Turn rate (rad/s) in each action: you commit to a swing and cannot snap-turn mid-active-frames. */
function actionTurn(f: Fighter): number {
  switch (f.action) {
    case 'attack': { const p = f.attack!.phase; return p === 'windup' ? 7 : p === 'active' ? 0.5 : 3; }
    case 'dodge': case 'stagger': case 'dead': return 0;
    default: return 14;
  }
}

/** Returns an array of movement-related event requests the world turns into CombatEvents. */
export function stepMovement(f: Fighter, intent: Intent, dt: number, arena: ArenaSpec, others: Fighter[]): { jumped: boolean; landed: boolean } {
  let jumped = false, landed = false;
  const out = { jumped, landed };
  // ---- facing
  const turn = actionTurn(f);
  if (turn > 0) {
    const diff = wrapAngle(intent.faceYaw - f.yaw);
    f.yaw = wrapAngle(lerpAngle(f.yaw, f.yaw + clamp(diff, -turn * dt, turn * dt), 1));
  }
  // ---- horizontal velocity
  if (f.action === 'dodge') {
    const k = Math.max(0, f.dodgeT / f.dodgeDur);          // 1 -> 0 over the roll
    const sp = (f.dodgeBack ? 7 : 10.5) * (0.25 + 0.75 * k);
    f.vel.x = f.dodgeDirX * sp; f.vel.z = f.dodgeDirZ * sp;
  } else if (f.action !== 'dead') {
    const mag = Math.hypot(intent.move.x, intent.move.z);
    const sprintOk = intent.sprint && f.stamina > 5 && mag > 0.1 && (f.action === 'idle') && f.onGround;
    f.sprinting = sprintOk;
    if (sprintOk) f.spendStamina(MOVE.sprintCost * dt, 0.5);
    let speed = (sprintOk ? MOVE.run : MOVE.walk) * f.moveSpeedMult * actionMoveMult(f);
    // walking backwards (relative to facing) is slower
    if (mag > 0.1) {
      const back = -(intent.move.x * f.forward.x + intent.move.z * f.forward.z) / mag;
      if (back > 0.3) speed *= 1 - (1 - MOVE.backMult) * back;
    }
    const tx = mag > 0.01 ? (intent.move.x / Math.max(1, mag)) * speed : 0;
    const tz = mag > 0.01 ? (intent.move.z / Math.max(1, mag)) * speed : 0;
    const dx = tx - f.vel.x, dz = tz - f.vel.z, dl = Math.hypot(dx, dz);
    const hasInput = mag > 0.01 && actionMoveMult(f) > 0;
    const rate = f.onGround ? (hasInput ? MOVE.accelGround : (f.action === 'attack' ? MOVE.attackFriction : MOVE.friction)) : MOVE.accelAir;
    const maxd = rate * dt;
    if (dl <= maxd || dl === 0) { f.vel.x = tx; f.vel.z = tz; } else { f.vel.x += (dx / dl) * maxd; f.vel.z += (dz / dl) * maxd; }
  } else { f.vel.x *= Math.max(0, 1 - 6 * dt); f.vel.z *= Math.max(0, 1 - 6 * dt); }
  // ---- jump / gravity / ground detection
  if (f.onGround) f.groundedT = 0; else f.groundedT += dt;
  if (intent.jumpPressed && (f.action === 'idle' || f.action === 'block') && f.groundedT <= MOVE.coyote && f.stamina >= MOVE.jumpCost) {
    f.vel.y = MOVE.jump; f.onGround = false; f.groundedT = 1; f.spendStamina(MOVE.jumpCost, 0.4); out.jumped = true;
  }
  f.vel.y -= MOVE.gravity * dt;
  f.pos.x += f.vel.x * dt; f.pos.z += f.vel.z * dt; f.pos.y += f.vel.y * dt;
  if (f.pos.y <= 0) {
    if (!f.onGround && f.vel.y < -5) { out.landed = true; f.landT = 0.18; }
    f.pos.y = 0; f.vel.y = 0; f.onGround = true;
  } else f.onGround = false;
  f.landT = Math.max(0, f.landT - dt);
  // ---- collisions: arena wall, pillars, other fighters
  collide(f, arena, others);
  return out;
}

function collide(f: Fighter, arena: ArenaSpec, others: Fighter[]) {
  for (const c of arena.colliders) {
    if (f.pos.y > c.h) continue;                              // can vault a brazier
    const dx = f.pos.x - c.x, dz = f.pos.z - c.z, d = Math.hypot(dx, dz), min = c.r + MOVE.bodyRadius;
    if (d < min) { const nx = d > 1e-5 ? dx / d : 1, nz = d > 1e-5 ? dz / d : 0; f.pos.x = c.x + nx * min; f.pos.z = c.z + nz * min; }
  }
  for (const o of others) {
    if (o === f || o.dead) continue;
    const dx = f.pos.x - o.pos.x, dz = f.pos.z - o.pos.z, d = Math.hypot(dx, dz), min = MOVE.bodyRadius * 2;
    if (d < min && Math.abs(f.pos.y - o.pos.y) < 1.6) {
      const nx = d > 1e-5 ? dx / d : 1, nz = d > 1e-5 ? dz / d : 0, push = (min - d) * 0.5;
      f.pos.x += nx * push; f.pos.z += nz * push; o.pos.x -= nx * push; o.pos.z -= nz * push;
    }
  }
  const r = Math.hypot(f.pos.x, f.pos.z), lim = arena.radius - MOVE.bodyRadius;
  if (r > lim) { f.pos.x *= lim / r; f.pos.z *= lim / r; }
}
