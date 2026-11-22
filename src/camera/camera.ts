import * as THREE from 'three';
import { clamp, lerp, lerpAngle, wrapAngle } from '../core/math';
import type { Fighter } from '../combat/fighter';
import type { ArenaSpec } from '../arenas/spec';

/** Third-person orbit camera with soft lock-on, arena/pillar collision and trauma shake. */
export class CameraRig {
  yaw = 0; pitch = 0.28; dist = 4.6; private curDist = 4.6; private shake = 0; private t = 0;
  lockOn = true; private look = new THREE.Vector3(); private pos = new THREE.Vector3();
  constructor(public camera: THREE.PerspectiveCamera, private arena: ArenaSpec) {}

  addShake(a: number) { this.shake = Math.min(1, this.shake + a); }
  snapBehind(player: Fighter) { this.yaw = player.yaw; this.pitch = 0.28; }

  /** yaw/pitch deltas from the input, then follow. `target` = lock-on enemy (or null). */
  update(dt: number, player: Fighter, target: Fighter | null, lookDX: number, lookDY: number) {
    this.t += dt;
    const locked = this.lockOn && target && !target.dead;
    if (locked) {
      const dx = target!.pos.x - player.pos.x, dz = target!.pos.z - player.pos.z, d = Math.hypot(dx, dz);
      const want = Math.atan2(dx, dz);
      // stronger pull when the enemy is far; the player can still nudge the camera a little
      this.yaw = lerpAngle(this.yaw, want + clamp(lookDX * 2, -0.4, 0.4) * 0, 1 - Math.exp(-6 * dt));
      this.yaw = wrapAngle(this.yaw + lookDX * 0.25);
      const wantPitch = clamp(0.32 - Math.min(d, 10) * 0.012 + (player.pos.y - target!.pos.y) * 0.05, 0.12, 0.5);
      this.pitch = lerp(this.pitch, wantPitch + lookDY * 0.3, 1 - Math.exp(-5 * dt));
      this.dist = clamp(4.2 + d * 0.22, 4.4, 7.2);
    } else {
      this.yaw = wrapAngle(this.yaw + lookDX); this.pitch = clamp(this.pitch + lookDY, -0.35, 1.2); this.dist = 4.6;
    }
    this.curDist += (this.dist - this.curDist) * (1 - Math.exp(-6 * dt));
    // focus point: slightly above the player, biased toward the target when locked
    const fx = player.pos.x, fy = player.pos.y + 1.55, fz = player.pos.z;
    let tx = fx, ty = fy, tz = fz;
    if (locked) { tx = lerp(fx, target!.pos.x, 0.22); tz = lerp(fz, target!.pos.z, 0.22); ty = lerp(fy, target!.pos.y + 1.4, 0.18); }
    const k = 1 - Math.exp(-14 * dt);
    this.look.x += (tx - this.look.x) * k; this.look.y += (ty - this.look.y) * k; this.look.z += (tz - this.look.z) * k;
    // desired position behind the focus along yaw/pitch (also offset to the shoulder)
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const bx = -Math.sin(this.yaw) * cp, bz = -Math.cos(this.yaw) * cp, by = sp;
    let d = this.curDist;
    // collision: keep the camera inside the wall and out of pillars
    const maxR = this.arena.radius + 2.4;
    for (let i = 0; i < 12; i++) {
      const px = this.look.x + bx * d, pz = this.look.z + bz * d, py = this.look.y + by * d;
      let bad = Math.hypot(px, pz) > maxR || py < 0.35;
      for (const c of this.arena.colliders) if (py < c.h + 0.4 && Math.hypot(px - c.x, pz - c.z) < c.r + 0.35) bad = true;
      if (!bad) break; d -= 0.4; if (d < 1.2) { d = 1.2; break; }
    }
    this.pos.set(this.look.x + bx * d, Math.max(0.4, this.look.y + by * d), this.look.z + bz * d);
    this.shake = Math.max(0, this.shake - dt * 2.8);
    const s = this.shake * this.shake * 0.12;
    this.camera.position.set(this.pos.x + Math.sin(this.t * 61) * s, this.pos.y + Math.cos(this.t * 53) * s, this.pos.z + Math.sin(this.t * 47) * s);
    this.camera.lookAt(this.look);
  }
}
