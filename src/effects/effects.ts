import * as THREE from 'three';
import type { CombatEvent } from '../combat/types';
import type { CombatWorld, Projectile } from '../combat/world';
import type { Fighter } from '../combat/fighter';
import { ELEMENT_COLOR } from './palette';
import { makeRng } from '../core/math';

const MAXP = 900;
const VERT = `attribute vec4 aColor; attribute float aSize; varying vec4 vC;
void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*(320.0/max(0.5,-mv.z)); gl_Position=projectionMatrix*mv; }`;
const FRAG = `varying vec4 vC; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; float a=(1.0-r); gl_FragColor=vec4(vC.rgb, vC.a*a*a); }`;

class Trail {
  private pts: { tip: THREE.Vector3; base: THREE.Vector3; t: number }[] = [];
  readonly mesh: THREE.Mesh; private pos: Float32Array; private col: Float32Array; private geo: THREE.BufferGeometry;
  private static N = 18;
  constructor() {
    const N = Trail.N; this.pos = new Float32Array(N * 2 * 3); this.col = new Float32Array(N * 2 * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    const idx: number[] = []; for (let i = 0; i < N - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    this.geo.setIndex(idx);
    this.mesh = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false; this.mesh.visible = false;
  }
  push(tip: THREE.Vector3, base: THREE.Vector3) { this.pts.unshift({ tip: tip.clone(), base: base.clone(), t: 0 }); if (this.pts.length > Trail.N) this.pts.pop(); }
  update(dt: number, color: THREE.Color) {
    for (const p of this.pts) p.t += dt;
    while (this.pts.length && this.pts[this.pts.length - 1].t > 0.2) this.pts.pop();
    const n = this.pts.length; this.mesh.visible = n >= 2;
    if (n < 2) return;
    for (let i = 0; i < Trail.N; i++) {
      const p = this.pts[Math.min(i, n - 1)]; const a = i < n ? Math.max(0, 1 - p.t / 0.2) * (1 - i / Trail.N * 0.5) : 0;
      this.pos.set([p.tip.x, p.tip.y, p.tip.z, p.base.x, p.base.y, p.base.z], i * 6);
      this.col.set([color.r * a, color.g * a, color.b * a, color.r * a * 0.2, color.g * a * 0.2, color.b * a * 0.2], i * 6);
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true;
  }
  clear() { this.pts.length = 0; this.mesh.visible = false; }
}

interface Ring { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; t: number; dur: number; r0: number; r1: number; active: boolean }

export class Effects {
  readonly group = new THREE.Group();
  private points: THREE.Points; private posA: Float32Array; private colA: Float32Array; private sizeA: Float32Array;
  private vel = new Float32Array(MAXP * 3); private life = new Float32Array(MAXP); private maxLife = new Float32Array(MAXP);
  private grav = new Float32Array(MAXP); private drag = new Float32Array(MAXP); private baseSize = new Float32Array(MAXP); private baseCol = new Float32Array(MAXP * 3);
  private head = 0; private rng = makeRng(99);
  private trails = new Map<number, Trail>(); private projMeshes = new Map<number, THREE.Object3D>(); private rings: Ring[] = [];
  density = 1;
  private tmpTip = new THREE.Vector3(); private tmpBase = new THREE.Vector3();

  constructor() {
    this.posA = new Float32Array(MAXP * 3); this.colA = new Float32Array(MAXP * 4); this.sizeA = new Float32Array(MAXP);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.posA, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.colA, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.sizeA, 1).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    this.points = new THREE.Points(g, m); this.points.frustumCulled = false; this.group.add(this.points);
    for (let i = 0; i < 10; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 40), mat); mesh.rotation.x = -Math.PI / 2; mesh.visible = false; this.group.add(mesh);
      this.rings.push({ mesh, mat, t: 0, dur: 1, r0: 0, r1: 1, active: false });
    }
  }

  // ---------------------------------------------------------------- primitives
  emit(x: number, y: number, z: number, vx: number, vy: number, vz: number, color: number, size: number, life: number, gravity = 0, drag = 0) {
    const i = this.head; this.head = (this.head + 1) % MAXP;
    this.posA[i * 3] = x; this.posA[i * 3 + 1] = y; this.posA[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    const c = new THREE.Color(color); this.baseCol[i * 3] = c.r; this.baseCol[i * 3 + 1] = c.g; this.baseCol[i * 3 + 2] = c.b;
    this.life[i] = life; this.maxLife[i] = life; this.grav[i] = gravity; this.drag[i] = drag; this.baseSize[i] = size;
  }
  burst(x: number, y: number, z: number, color: number, n: number, speed: number, size = 0.1, life = 0.5, gravity = 8, dirx = 0, dirz = 0, spread = 1) {
    n = Math.max(1, Math.round(n * this.density));
    for (let k = 0; k < n; k++) {
      const a = this.rng() * Math.PI * 2, e = (this.rng() - 0.3) * 1.2, s = speed * (0.35 + this.rng() * 0.8);
      const vx = Math.cos(a) * Math.cos(e) * s * spread + dirx * s * (1 - spread + 0.3), vy = Math.sin(e) * s + speed * 0.2, vz = Math.sin(a) * Math.cos(e) * s * spread + dirz * s * (1 - spread + 0.3);
      this.emit(x, y, z, vx, vy, vz, color, size * (0.6 + this.rng() * 0.8), life * (0.6 + this.rng() * 0.7), gravity, 1.5);
    }
  }
  ring(x: number, y: number, z: number, color: number, r0: number, r1: number, dur = 0.4, opacity = 0.8) {
    const r = this.rings.find(q => !q.active) ?? this.rings[0];
    r.active = true; r.t = 0; r.dur = dur; r.r0 = r0; r.r1 = r1; r.mesh.visible = true; r.mesh.position.set(x, y, z); r.mat.color.setHex(color); r.mat.opacity = opacity; r.mesh.scale.setScalar(r0);
    (r.mat as any)._o = opacity;
  }

  // ---------------------------------------------------------------- combat events
  handle(e: CombatEvent) {
    const p = e.pos, col = e.element && e.element !== 'none' ? ELEMENT_COLOR[e.element] : 0xffd9a0;
    switch (e.type) {
      case 'hit': {
        const n = e.heavy ? 22 : 12;
        this.burst(p.x, p.y, p.z, col, n, e.heavy ? 6.5 : 4.5, 0.09, 0.45, 9, e.dir?.x ?? 0, e.dir?.z ?? 0, 0.8);
        this.burst(p.x, p.y, p.z, 0xffffff, 4, 3, 0.07, 0.2, 2);
        if (e.element === 'fire') this.burst(p.x, p.y, p.z, 0xff4a10, 10, 3, 0.16, 0.7, -3);
        if (e.element === 'ice') this.burst(p.x, p.y, p.z, 0xdff6ff, 12, 3.5, 0.09, 0.8, 4);
        if (e.element === 'lightning') this.burst(p.x, p.y, p.z, 0xfff6a0, 14, 7, 0.06, 0.25, 0);
        break;
      }
      case 'block': this.burst(p.x, p.y, p.z, 0xffe9a8, 14, 6, 0.08, 0.35, 10, e.dir?.x ?? 0, e.dir?.z ?? 0, 0.9); this.ring(p.x, p.y, p.z, 0xffe9a8, 0.1, 0.55, 0.18, 0.6); break;
      case 'parry': this.burst(p.x, p.y, p.z, 0xffffff, 26, 8, 0.1, 0.5, 4); this.ring(p.x, p.y, p.z, 0xfff3c0, 0.2, 1.8, 0.35, 1); break;
      case 'guardbreak': this.burst(p.x, p.y, p.z, 0xff5a40, 24, 7, 0.1, 0.5, 6); this.ring(p.x, p.y, p.z, 0xff5a40, 0.2, 1.6, 0.35, 0.9); break;
      case 'clang': this.burst(p.x, p.y, p.z, 0xffe28a, 16, 6, 0.07, 0.3, 10); break;
      case 'dodge': if (!e.blocked) this.burst(p.x, 0.1, p.z, 0xb9a88a, 8, 2.5, 0.2, 0.5, 1); else this.burst(p.x, p.y, p.z, 0x9fd8ff, 5, 3, 0.07, 0.3, 0); break;
      case 'step': this.burst(p.x, 0.05, p.z, 0xb9a88a, 2, 0.9, 0.16, 0.45, 0.5); break;
      case 'jump': case 'land': this.burst(p.x, 0.08, p.z, 0xb9a88a, e.type === 'land' ? 9 : 5, 2.6, 0.22, 0.55, 0.5); if (e.type === 'land') this.ring(p.x, 0.05, p.z, 0xc9b896, 0.2, 1.1, 0.3, 0.35); break;
      case 'armorbreak': this.burst(p.x, p.y, p.z, 0x9aa3b4, 24, 5, 0.12, 0.8, 14); this.ring(p.x, p.y, p.z, 0xc9a24a, 0.2, 1.3, 0.3, 0.8); break;
      case 'death': this.burst(p.x, 1, p.z, 0xffb060, 40, 5, 0.12, 1.2, 1); this.ring(p.x, 0.06, p.z, 0xffb060, 0.3, 4.5, 0.8, 0.8); break;
      case 'burst': this.ring(p.x, 0.1, p.z, col, 0.4, (e.radius ?? 3) + 0.3, 0.45, 0.95); this.burst(p.x, 0.3, p.z, col, 36, 6, 0.14, 0.7, 2); break;
      case 'pulse': this.ring(p.x, 0.1, p.z, col, 0.4, (e.radius ?? 3) + 0.3, 0.4, 1); this.ring(p.x, 0.9, p.z, col, 0.2, (e.radius ?? 3), 0.35, 0.7); this.burst(p.x, 1, p.z, col, 30, 7, 0.1, 0.5, 0); break;
      case 'ward': this.ring(p.x, 0.1, p.z, col, 0.3, 1.4, 0.5, 0.8); this.burst(p.x, 1, p.z, col, 12, 2.5, 0.1, 0.7, -1); break;
      case 'special': this.ring(p.x, 0.05, p.z, col, 0.2, 1.2, 0.35, 0.8); break;
      case 'switch': this.burst(p.x, 1.2, p.z, 0xffffff, 6, 2, 0.07, 0.3, 0); break;
      case 'riposte': this.burst(p.x, 1.3, p.z, 0xfff3c0, 8, 3, 0.07, 0.3, 0); break;
      case 'dash': this.burst(p.x, 0.4, p.z, col, 12, 3, 0.12, 0.4, 0); break;
      default: break;
    }
  }

  // ---------------------------------------------------------------- per frame
  update(dt: number, world: CombatWorld, getTrail: (f: Fighter, tip: THREE.Vector3, base: THREE.Vector3) => boolean) {
    for (let i = 0; i < MAXP; i++) {
      if (this.life[i] <= 0) { this.colA[i * 4 + 3] = 0; this.sizeA[i] = 0; continue; }
      this.life[i] -= dt; const t = Math.max(0, this.life[i] / this.maxLife[i]);
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.posA[i * 3] += this.vel[i * 3] * dt; this.posA[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.posA[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.posA[i * 3 + 1] < 0.02 && this.grav[i] > 0) { this.posA[i * 3 + 1] = 0.02; this.vel[i * 3 + 1] *= -0.3; }
      this.colA[i * 4] = this.baseCol[i * 3]; this.colA[i * 4 + 1] = this.baseCol[i * 3 + 1]; this.colA[i * 4 + 2] = this.baseCol[i * 3 + 2]; this.colA[i * 4 + 3] = t;
      this.sizeA[i] = this.baseSize[i] * (0.4 + t * 0.8);
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true; g.attributes.aSize.needsUpdate = true;

    for (const r of this.rings) if (r.active) {
      r.t += dt; const k = r.t / r.dur;
      if (k >= 1) { r.active = false; r.mesh.visible = false; continue; }
      r.mesh.scale.setScalar(r.r0 + (r.r1 - r.r0) * (1 - (1 - k) * (1 - k))); r.mat.opacity = ((r.mat as any)._o ?? 1) * (1 - k);
    }

    // weapon trails
    for (const f of world.fighters) {
      let tr = this.trails.get(f.id); if (!tr) { tr = new Trail(); this.trails.set(f.id, tr); this.group.add(tr.mesh); }
      const a = f.attack;
      if (a && a.move.melee && (a.phase === 'active' || (a.phase === 'windup' && a.t / a.dur > 0.6)) && getTrail(f, this.tmpTip, this.tmpBase)) tr.push(this.tmpTip, this.tmpBase);
      const el = f.weapon.element; tr.update(dt, new THREE.Color(el === 'none' ? 0xcfd8e8 : ELEMENT_COLOR[el]));
      // status auras
      if (f.st.burnT > 0 && this.rng() < dt * 40) this.emit(f.pos.x + (this.rng() - 0.5) * 0.5, f.pos.y + 0.3 + this.rng() * 1.3, f.pos.z + (this.rng() - 0.5) * 0.5, 0, 1.6, 0, 0xff6a1a, 0.18, 0.5, -1);
      if (f.st.chillT > 0 && this.rng() < dt * 18) this.emit(f.pos.x + (this.rng() - 0.5) * 0.6, f.pos.y + 0.2 + this.rng() * 1.5, f.pos.z + (this.rng() - 0.5) * 0.6, 0, -0.4, 0, 0xcfefff, 0.1, 0.8, 0.3);
      if (f.st.shockT > 0 && this.rng() < dt * 30) this.emit(f.pos.x + (this.rng() - 0.5) * 0.8, f.pos.y + this.rng() * 1.7, f.pos.z + (this.rng() - 0.5) * 0.8, (this.rng() - 0.5) * 4, (this.rng() - 0.5) * 4, (this.rng() - 0.5) * 4, 0xfff6a0, 0.07, 0.15);
      if (f.st.wardT > 0 && this.rng() < dt * 14) { const an = this.rng() * 6.28; this.emit(f.pos.x + Math.cos(an) * 0.8, f.pos.y + 0.2 + this.rng() * 1.5, f.pos.z + Math.sin(an) * 0.8, 0, 0.5, 0, 0x6fe8ff, 0.1, 0.6); }
    }

    // projectiles
    const live = new Set<number>();
    for (const p of world.projectiles) {
      live.add(p.id);
      let m = this.projMeshes.get(p.id);
      if (!m) { m = this.makeProjectile(p); this.projMeshes.set(p.id, m); this.group.add(m); }
      m.position.set(p.pos.x, p.pos.y, p.pos.z);
      if (p.kind === 'arrow') m.lookAt(p.pos.x + p.vel.x, p.pos.y + p.vel.y, p.pos.z + p.vel.z); else if (p.kind === 'wave') m.rotation.y = Math.atan2(p.vel.x, p.vel.z);
      const col = p.spec.element === 'none' ? 0xdddddd : ELEMENT_COLOR[p.spec.element];
      if (this.rng() < dt * 60) this.emit(p.pos.x, p.pos.y, p.pos.z, (this.rng() - 0.5), (this.rng() - 0.5) + (p.wave ? 0.8 : 0), (this.rng() - 0.5), col, p.wave ? 0.25 : 0.1, 0.35, -1);
    }
    for (const [id, m] of this.projMeshes) if (!live.has(id)) { m.removeFromParent(); this.projMeshes.delete(id); }
  }

  private makeProjectile(p: Projectile): THREE.Object3D {
    const col = p.spec.element === 'none' ? 0xe8e0d0 : ELEMENT_COLOR[p.spec.element];
    const g = new THREE.Group();
    if (p.kind === 'wave') {
      const arc = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.75, 20, 1, -Math.PI * 0.42, Math.PI * 0.84), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false }));
      arc.rotation.x = -Math.PI / 2; arc.rotation.z = Math.PI / 2; arc.scale.setScalar(Math.max(1, p.radius * 1.4)); g.add(arc);
    } else if (p.kind === 'arrow') {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.8, 5), new THREE.MeshBasicMaterial({ color: 0xd8c7a0 })); shaft.rotation.x = Math.PI / 2; g.add(shaft);
      const head = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 5), new THREE.MeshBasicMaterial({ color: col })); head.rotation.x = Math.PI / 2; head.position.z = 0.44; g.add(head);
    } else {
      g.add(new THREE.Mesh(new THREE.SphereGeometry(Math.max(0.12, p.radius), 8, 6), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending })));
    }
    return g;
  }
  clearAll() {
    this.life.fill(0); for (const t of this.trails.values()) { t.clear(); t.mesh.removeFromParent(); } this.trails.clear();
    for (const m of this.projMeshes.values()) m.removeFromParent(); this.projMeshes.clear();
    for (const r of this.rings) { r.active = false; r.mesh.visible = false; }
  }
}
