import * as THREE from 'three';
import type { Fighter } from '../combat/fighter';
import { swingPose } from '../combat/swing';
import { clamp, easeInOut, easeOut, lerp } from '../core/math';
import { LEN, Rig, SIDE_L, SIDE_R } from './rig';
import type { WeaponModel } from '../weapons/models';

/** Anything that can pose a character from simulation state. Procedural today, clip-driven for GLB characters. */
export interface AnimationSource { update(f: Fighter, dt: number, held: HeldItems): void }
export interface HeldItems { main: WeaponModel | null; off: WeaponModel | null; shield: WeaponModel | null }

const UP = new THREE.Vector3(0, 1, 0), DOWN = new THREE.Vector3(0, -1, 0), FWD = new THREE.Vector3(0, 0, 1);
const V1 = new THREE.Vector3(), V2 = new THREE.Vector3(), V3 = new THREE.Vector3(), Q1 = new THREE.Quaternion(), Q2 = new THREE.Quaternion(), RQ = new THREE.Quaternion();

/** Orient `obj` so that its local `axis` points along `dirRoot` (given in the fighter root's local frame). */
function aim(obj: THREE.Object3D, axis: THREE.Vector3, dirRoot: THREE.Vector3, rootQ: THREE.Quaternion) {
  V1.copy(dirRoot).applyQuaternion(rootQ).normalize();
  Q1.setFromUnitVectors(axis, V1);
  obj.parent!.getWorldQuaternion(Q2).invert();
  obj.quaternion.copy(Q2.multiply(Q1));
}

export class ProceduralAnimator implements AnimationSource {
  private phase = 0; private lx = 0; private lz = 0; private lean = 0; private strafeLean = 0; private crouch = 0; private t = 0;
  private deathT = 0; private rollAxis = new THREE.Vector3(1, 0, 0);
  private readonly hR = new THREE.Vector3(); private readonly hL = new THREE.Vector3(); private readonly dR = new THREE.Vector3(0, 1, 0.3); private readonly dL = new THREE.Vector3(0, 1, 0.3);
  private readonly poleR = new THREE.Vector3(-0.7, -0.8, -0.35); private readonly poleL = new THREE.Vector3(0.7, -0.8, -0.35);
  private tuck = false;
  constructor(private rig: Rig) {}

  update(f: Fighter, dt: number, held: HeldItems) {
    const r = this.rig; this.t += dt;
    const fw = f.forward, rt = f.right;
    const vf = f.vel.x * fw.x + f.vel.z * fw.z, vs = -(f.vel.x * rt.x + f.vel.z * rt.z);   // local +x is the fighter's LEFT, so negate right
    const sp = Math.hypot(f.vel.x, f.vel.z), k = 1 - Math.exp(-12 * dt);
    this.lx += (clamp(vs / 6.2, -1, 1) - this.lx) * k; this.lz += (clamp(vf / 6.2, -1, 1) - this.lz) * k;
    this.lean += (clamp(vf / 6.2, -1, 1) * 0.16 - this.lean) * k;
    this.strafeLean += (clamp(vs / 6.2, -1, 1) * 0.12 - this.strafeLean) * k;
    if (f.onGround && f.action !== 'dodge') this.phase += sp * dt * 1.7;
    const amp = clamp(sp / 3.4, 0, 1);
    const sw = Math.sin(this.phase), sw2 = Math.sin(this.phase + Math.PI);

    // ---- defaults
    r.pivot.position.set(0, LEN.pivotY, 0); r.pivot.quaternion.identity();
    r.spine.rotation.set(0, 0, 0); r.chest.rotation.set(Math.sin(this.t * 1.8) * 0.012, 0, 0); r.neck.rotation.set(0, 0, 0); r.head.rotation.set(0, 0, 0);
    this.tuck = false;
    let crouchTarget = 0;
    const legs = (a: number, b: number, kneeA: number, kneeB: number, splay = 0) => {
      r.thigh[0].rotation.set(a, 0, -splay); r.thigh[1].rotation.set(b, 0, splay); r.shin[0].rotation.set(kneeA, 0, 0); r.shin[1].rotation.set(kneeB, 0, 0);
    };
    // locomotion legs
    const stride = 0.75 * amp;
    legs(-sw * stride * this.lz - sw * 0.1 * amp, -sw2 * stride * this.lz - sw2 * 0.1 * amp, Math.max(0, sw) * 0.9 * amp + 0.05, Math.max(0, sw2) * 0.9 * amp + 0.05, 0.05 + Math.abs(this.lx) * 0.12 * (sw > 0 ? 1 : -0.4));
    if (Math.abs(this.lx) > 0.2) { r.thigh[0].rotation.z += sw * 0.3 * this.lx * amp; r.thigh[1].rotation.z += sw2 * 0.3 * this.lx * amp; }
    r.pivot.position.y -= Math.abs(sw) * 0.035 * amp;
    r.pivot.rotation.x = this.lean; r.pivot.rotation.z = -this.strafeLean;
    // stance when idle: slight knee bend and offset feet
    if (sp < 0.3 && f.onGround) { crouchTarget += 0.03; r.thigh[0].rotation.x -= 0.1; r.thigh[1].rotation.x += 0.12; r.shin[0].rotation.x += 0.12; r.shin[1].rotation.x += 0.06; }
    if (!f.onGround) { legs(-0.55, 0.1, 0.9, 0.5, 0.1); r.pivot.rotation.x = 0.05; }
    if (f.landT > 0) crouchTarget += 0.14 * (f.landT / 0.18);
    this.crouch += (crouchTarget - this.crouch) * (1 - Math.exp(-18 * dt));
    r.pivot.position.y -= this.crouch;
    if (this.crouch > 0.02) { r.thigh[0].rotation.x -= this.crouch * 3; r.thigh[1].rotation.x -= this.crouch * 3; r.shin[0].rotation.x += this.crouch * 5.5; r.shin[1].rotation.x += this.crouch * 5.5; }

    // ---- hand targets (root-local; local +x = fighter's left)
    const w = f.weapon, shield = held.shield, two = w.grip === 'two', bow = w.grip === 'bow';
    const side = f.attack?.handSide ?? 1;
    const bob = Math.sin(this.t * 1.8) * 0.012;
    this.hR.set(-0.28, 1.12 + bob, 0.36); this.dR.set(0.1, 1, 0.55).normalize();
    this.hL.set(0.3, 1.1 + bob, 0.3); this.dL.set(-0.1, 1, 0.55).normalize();
    let offUsesShield = !!shield;
    let spinLike = false;
    if (w.grip === 'dual') { this.hL.set(0.28, 1.12, 0.36); }

    switch (f.action) {
      case 'block': {
        const parry = f.parryT > 0;
        if (shield && w.grip !== 'dual') { this.hL.set(0.12, 1.32, 0.52); }
        this.hR.set(-0.14, 1.32, 0.5); this.dR.set(parry ? 0.15 : 0.45, parry ? 0.6 : 0.85, parry ? 0.8 : 0.3).normalize();
        if (w.grip === 'dual' || w.grip === 'gauntlet') { this.hL.set(0.14, 1.3, 0.5); this.dL.set(-0.45, 0.85, 0.3).normalize(); }
        r.spine.rotation.y = 0.1; r.pivot.rotation.x += 0.08; break;
      }
      case 'attack': {
        const a = f.attack!, m = a.move, p = clamp(a.t / a.dur, 0, 1);
        const sg = a.sign;
        const ph = a.phase;
        const pose = swingPose(m, ph, p, sg);
        // chest twist follows the swing direction
        r.spine.rotation.y = clamp(-pose.dx * 0.5, -0.6, 0.6) * (ph === 'recovery' ? 1 - p : 1);
        r.pivot.rotation.x += (ph === 'windup' ? -0.05 : ph === 'active' ? 0.18 : 0.08) + (m.style === 'smash' || m.style === 'overhead' ? (ph === 'windup' ? -0.12 : 0.18) : 0);
        if (m.lunge > 2 && ph === 'active') { r.pivot.position.y -= 0.1; r.pivot.rotation.x += 0.1; }
        spinLike = m.style === 'spin';
        const len = m.reach * pose.extend;
        const gx = spinLike ? 0 : 0.32 * a.handSide, gz = spinLike ? 0.1 : 0.3;
        V2.set(-gx, 1.25, gz);
        const dir = V3.set(-pose.dx, pose.dy, pose.dz).normalize();
        const bursty = w.grip === 'gauntlet' || m.style === 'bash' || m.style === 'punch';
        if (bow) {
          this.hL.set(0.2, 1.42, 0.72); this.dL.set(0, 1, 0);
          const pull = ph === 'windup' ? easeOut(p) : ph === 'active' ? 1 - p * 0.6 : 0.4 * (1 - p);
          this.hR.set(-0.1, 1.42, lerp(0.7, 0.24, pull)); this.dR.set(0, 0, 1);
          r.spine.rotation.y = -0.3;
        } else if (w.grip === 'shield') {
          this.hL.copy(V2).addScaledVector(dir, len * 0.8);
        } else if (a.handSide >= 0 || (w.grip !== 'dual' && w.grip !== 'gauntlet')) {
          if (bursty) { this.hR.copy(V2).addScaledVector(dir, len); }
          else this.hR.copy(V2);
          this.dR.copy(dir);
          if (w.grip === 'dual') { this.hL.set(0.3, 1.1, 0.3); this.dL.set(-0.2, 1, 0.5).normalize(); }
          else if (w.grip === 'gauntlet') { this.hL.set(0.3, 1.15, 0.3); }
        } else {
          // left-hand strike (dual blades / gauntlet alternate / shield bash)
          this.hL.copy(V2); if (bursty) this.hL.addScaledVector(dir, len); this.dL.copy(dir);
          if (w.grip === 'gauntlet') this.hR.set(-0.3, 1.15, 0.3);
        }
        break;
      }
      case 'dodge': {
        const e = clamp((f.dodgeDur - f.dodgeT) / f.dodgeDur, 0, 1);
        this.tuck = true;
        const dx = f.dodgeDirX * -rt.x + f.dodgeDirZ * -rt.z, dz = f.dodgeDirX * fw.x + f.dodgeDirZ * fw.z;   // dodge dir in root-local
        if (f.dodgeBack) {
          r.pivot.rotation.x = -0.35 * Math.sin(e * Math.PI); r.pivot.position.y -= 0.18 * Math.sin(e * Math.PI);
          legs(-0.5, 0.3, 0.9, 0.4); this.tuck = false;
        } else {
          this.rollAxis.set(dz, 0, -dx).normalize();     // up x dir
          Q1.setFromAxisAngle(this.rollAxis, easeInOut(e) * Math.PI * 2);
          r.pivot.quaternion.copy(Q1);
          r.pivot.position.y = LEN.pivotY - 0.42 * Math.sin(e * Math.PI) - 0.1;
          legs(-1.5, -1.5, 2.2, 2.2);
        }
        break;
      }
      case 'stagger': {
        const e = clamp(f.actT / Math.max(0.2, f.staggerT + f.actT), 0, 1);
        const sev = f.staggerKind === 'hit' ? 1 : 1.4;
        r.pivot.rotation.x = -0.3 * sev * Math.sin(Math.min(1, e * 3) * Math.PI * 0.5) * (1 - e * 0.5);
        r.spine.rotation.z = 0.12 * Math.sin(f.actT * 18) * (1 - e); r.head.rotation.x = -0.3 * sev;
        this.tuck = true; legs(-0.3, 0.2, 0.5, 0.3, 0.12);
        break;
      }
      case 'switch': {
        const e = clamp(1 - f.switchT / 0.35, 0, 1);
        this.hR.set(-0.3, 1.0 + Math.sin(e * Math.PI) * 0.4, 0.3 + Math.sin(e * Math.PI) * 0.15); this.dR.set(0, 1, 0.2 + Math.sin(e * Math.PI) * 0.5).normalize();
        break;
      }
      case 'dead': {
        this.deathT = Math.min(1, this.deathT + dt / 0.8);
        const e = easeOut(this.deathT);
        r.pivot.rotation.x = -e * (Math.PI / 2 - 0.1); r.pivot.position.y = LEN.pivotY - e * 0.7; r.pivot.rotation.z = e * 0.15;
        legs(0.1, -0.2, 0.2, 0.4, 0.2); this.tuck = true; r.head.rotation.x = 0.2 * e;
        break;
      }
      default: {
        if (!bow && two) { this.hR.set(-0.2, 1.1 + bob, 0.38); this.dR.set(0.2, 1, 0.5).normalize(); }
        if (bow) { this.hL.set(0.2, 1.3, 0.6); this.dL.set(0, 1, 0.05).normalize(); this.hR.set(-0.22, 1.2, 0.36); }
        if (w.grip === 'gauntlet') { this.hR.set(-0.25, 1.2, 0.42); this.hL.set(0.25, 1.2, 0.42); }
      }
    }
    if (f.action !== 'dead') this.deathT = 0;

    // cape sway
    r.cape.rotation.x = 0.12 + clamp(sp / 6, 0, 1) * 0.5 + Math.sin(this.t * 2 + 1) * 0.04;
    if (f.action === 'dodge') r.cape.rotation.x = 0.9;

    // ---- solve arms
    r.root.updateMatrixWorld(true);
    r.root.getWorldQuaternion(RQ);
    const T = new THREE.Vector3();
    const targetFor = (p: THREE.Vector3): THREE.Vector3 => {
      if (!this.tuck) return T.copy(p);
      // tucked arms: place relative to the (rotated) chest so they ride along with the body
      V1.set(Math.sign(p.x) * 0.2, 0.28, 0.28); r.chest.localToWorld(V1); return T.copy(r.root.worldToLocal(V1));
    };
    this.solve(SIDE_R, targetFor(this.hR));
    // two-hand grip: left hand goes to the shaft
    const mm = held.main;
    if (two && !bow && f.action !== 'dodge' && f.action !== 'dead' && f.action !== 'stagger' && mm && mm.grip2 !== null) {
      const dir = f.action === 'attack' ? this.dR : this.dR;
      this.hL.copy(this.hR).addScaledVector(dir, mm.grip2);
      this.dL.copy(dir);
    }
    this.solve(SIDE_L, targetFor(this.hL));
    this.orientHeld(f, held);
  }

  private solve(side: number, target: THREE.Vector3) {
    const r = this.rig, up = r.upper[side], fo = r.fore[side], a = LEN.upper, b = LEN.fore;
    const S = up.getWorldPosition(V1.clone()); r.root.worldToLocal(S);
    const d = target.clone().sub(S); let dist = d.length(); if (dist < 1e-4) return;
    const dn = d.clone().divideScalar(dist); dist = clamp(dist, 0.08, a + b - 0.006);
    const proj = (a * a - b * b + dist * dist) / (2 * dist), h = Math.sqrt(Math.max(0, a * a - proj * proj));
    const pole = (side === SIDE_R ? this.poleR : this.poleL).clone(); pole.addScaledVector(dn, -pole.dot(dn));
    if (pole.lengthSq() < 1e-6) pole.set(0, -1, 0); pole.normalize();
    const E = S.clone().addScaledVector(dn, proj).addScaledVector(pole, h);
    const H = S.clone().addScaledVector(dn, dist);
    r.root.getWorldQuaternion(RQ);
    aim(up, DOWN, E.clone().sub(S), RQ);
    up.updateMatrixWorld(true);
    aim(fo, DOWN, H.clone().sub(E), RQ);
    fo.updateMatrixWorld(true);
  }

  private orientHeld(f: Fighter, held: HeldItems) {
    const r = this.rig; r.root.getWorldQuaternion(RQ);
    const w = f.weapon;
    const place = (m: WeaponModel | null, side: number, dir: THREE.Vector3) => { if (m) aim(m.group, UP, dir, RQ); void side; };
    if (w.grip === 'bow') {
      // bow lives in the left hand; the right hand draws
      if (held.main) { aim(held.main.group, UP, this.dL, RQ); }
    } else if (w.grip === 'gauntlet') {
      if (held.main) aim(held.main.group, UP, V3.set(0, 0.2, 1), RQ);
      if (held.off) aim(held.off.group, UP, V3.set(0, 0.2, 1), RQ);
    } else {
      place(held.main, SIDE_R, this.dR);
      if (held.off) place(held.off, SIDE_L, this.dL);
    }
    if (held.shield) {
      const sd = f.action === 'block' ? V3.set(0, 0.05, 1) : V3.set(0.35, 0.1, 1);
      aim(held.shield.group, FWD, sd, RQ);
    }
    void easeInOut;
  }
}

/**
 * Hook for GLB characters: map simulation state to named clips on an AnimationMixer.
 * Expected clip names: idle, walk, run, strafe_l, strafe_r, back, jump, fall, land, dodge, block, parry,
 * light_1..n, heavy, special, stagger, knockback, death. Not exercised yet (no character GLB ships with the repo).
 */
export class ClipAnimator implements AnimationSource {
  private actions = new Map<string, THREE.AnimationAction>(); private current: THREE.AnimationAction | null = null;
  constructor(private mixer: THREE.AnimationMixer, clips: THREE.AnimationClip[]) { for (const c of clips) this.actions.set(c.name.toLowerCase(), mixer.clipAction(c)); }
  private pick(f: Fighter): string {
    switch (f.action) {
      case 'attack': return f.attack!.move.kind === 'light' ? 'light_' + (((f.comboIdx - 1 + 8) % 3) + 1) : f.attack!.move.kind;
      case 'block': return f.parryT > 0 ? 'parry' : 'block';
      case 'dodge': return 'dodge'; case 'stagger': return f.staggerKind === 'hit' ? 'stagger' : 'knockback'; case 'dead': return 'death';
      default: { if (!f.onGround) return f.vel.y > 0 ? 'jump' : 'fall'; const s = Math.hypot(f.vel.x, f.vel.z); return s > 4.5 ? 'run' : s > 0.5 ? 'walk' : 'idle'; }
    }
  }
  update(f: Fighter, dt: number, _held: HeldItems) {
    const next = this.actions.get(this.pick(f)) ?? this.actions.get('idle') ?? null;
    if (next && next !== this.current) { next.reset().fadeIn(0.12).play(); this.current?.fadeOut(0.12); this.current = next; }
    this.mixer.update(dt);
  }
}
