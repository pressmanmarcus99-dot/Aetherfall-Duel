import * as THREE from 'three';
import { COLOSSEUM, ArenaSpec } from './spec';
import { makeRng } from '../core/math';

export interface ArenaVisual { spec: ArenaSpec; update(t: number): void; setQuality(q: 'low' | 'balanced' | 'high'): void; sun: THREE.DirectionalLight; dispose(): void }

function canvasTex(size: number, draw: (c: CanvasRenderingContext2D, s: number) => void, repeat?: [number, number]): THREE.CanvasTexture {
  const cv = document.createElement('canvas'); cv.width = cv.height = size; draw(cv.getContext('2d')!, size);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}

/** The Sunken Colosseum. Visual geometry matches arenas/spec.ts: 15 m floor, braziers at the collider positions. */
export function buildColosseum(scene: THREE.Scene): ArenaVisual {
  const spec = COLOSSEUM, R = spec.radius, rng = makeRng(2024);
  const root = new THREE.Group(); root.name = 'colosseum'; scene.add(root);
  scene.background = new THREE.Color(0x1b1a2e); scene.fog = new THREE.Fog(0x1d1a26, 28, 85);

  // ---- sky dome
  const sky = new THREE.Mesh(new THREE.SphereGeometry(120, 24, 12), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: 'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'varying vec3 vP; void main(){ float h=normalize(vP).y; vec3 hor=vec3(0.95,0.52,0.32), mid=vec3(0.32,0.2,0.4), top=vec3(0.05,0.06,0.16); vec3 c=mix(hor,mid,smoothstep(-0.05,0.25,h)); c=mix(c,top,smoothstep(0.2,0.8,h)); gl_FragColor=vec4(c,1.0); }',
  }));
  root.add(sky);
  // sun disc + stars-ish moon
  const sun = new THREE.Mesh(new THREE.CircleGeometry(7, 24), new THREE.MeshBasicMaterial({ color: 0xffb070, fog: false })); sun.position.set(-70, 22, 60); sun.lookAt(0, 0, 0); root.add(sun);

  // ---- floor
  const sandTex = canvasTex(512, (c, s) => {
    c.fillStyle = '#b79a6b'; c.fillRect(0, 0, s, s);
    for (let i = 0; i < 9000; i++) { const v = 150 + Math.floor(rng() * 70); c.fillStyle = `rgba(${v},${v - 22},${v - 62},0.35)`; c.fillRect(rng() * s, rng() * s, 1 + rng() * 2, 1 + rng() * 2); }
    c.strokeStyle = 'rgba(80,55,30,0.35)'; c.lineWidth = 3;
    for (let i = 0; i < 26; i++) { c.beginPath(); const y = rng() * s; c.moveTo(0, y); c.bezierCurveTo(s * 0.3, y + 14 * (rng() - 0.5), s * 0.7, y + 14 * (rng() - 0.5), s, y + 10 * (rng() - 0.5)); c.stroke(); }
  }, [3, 3]);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 64), new THREE.MeshStandardMaterial({ map: sandTex, roughness: 1, metalness: 0 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; root.add(floor);
  // painted sigil rings
  const sigil = canvasTex(1024, (c, s) => {
    c.clearRect(0, 0, s, s); c.translate(s / 2, s / 2); c.strokeStyle = 'rgba(60,30,20,0.55)'; c.lineWidth = 6;
    for (const r of [0.96, 0.62, 0.3]) { c.beginPath(); c.arc(0, 0, s / 2 * r, 0, Math.PI * 2); c.stroke(); }
    c.lineWidth = 4; for (let i = 0; i < 12; i++) { c.save(); c.rotate(i * Math.PI / 6); c.beginPath(); c.moveTo(0, -s / 2 * 0.3); c.lineTo(0, -s / 2 * 0.62); c.stroke(); c.restore(); }
    c.strokeStyle = 'rgba(190,140,50,0.45)'; c.lineWidth = 5; c.beginPath(); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r = s / 2 * 0.3; c.lineTo(Math.cos(a) * r, Math.sin(a) * r); } c.closePath(); c.stroke();
  });
  const decal = new THREE.Mesh(new THREE.CircleGeometry(R, 64), new THREE.MeshBasicMaterial({ map: sigil, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 })); decal.rotation.x = -Math.PI / 2; decal.position.y = 0.01; root.add(decal);

  // ---- walls + terraces
  const stone = canvasTex(256, (c, s) => {
    c.fillStyle = '#6d6a66'; c.fillRect(0, 0, s, s);
    for (let y = 0; y < s; y += 32) for (let x = (y / 32) % 2 ? 0 : -32; x < s; x += 64) { const v = 90 + Math.floor(rng() * 40); c.fillStyle = `rgb(${v},${v - 4},${v - 10})`; c.fillRect(x + 2, y + 2, 60, 28); }
    for (let i = 0; i < 1200; i++) { c.fillStyle = `rgba(0,0,0,${rng() * 0.12})`; c.fillRect(rng() * s, rng() * s, 2, 2); }
  }, [24, 2]);
  const stoneMat = new THREE.MeshStandardMaterial({ map: stone, roughness: 0.95, side: THREE.BackSide });
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.7, R + 0.7, 3.2, 64, 1, true), stoneMat); wall.position.y = 1.6; wall.receiveShadow = true; root.add(wall);
  const cap = new THREE.Mesh(new THREE.TorusGeometry(R + 0.7, 0.22, 6, 64), new THREE.MeshStandardMaterial({ color: 0x8b8378, roughness: 0.8 })); cap.rotation.x = Math.PI / 2; cap.position.y = 3.2; root.add(cap);
  const tierMat = new THREE.MeshStandardMaterial({ color: 0x585553, roughness: 1, side: THREE.DoubleSide }), riserMat = stoneMat.clone();
  for (let i = 0; i < 6; i++) {
    const r0 = R + 0.7 + i * 1.7, y = 3.2 + i * 1.1;
    const tread = new THREE.Mesh(new THREE.RingGeometry(r0, r0 + 1.7, 64), tierMat); tread.rotation.x = -Math.PI / 2; tread.position.y = y; root.add(tread);
    const riser = new THREE.Mesh(new THREE.CylinderGeometry(r0 + 1.7, r0 + 1.7, 1.1, 64, 1, true), riserMat); riser.position.y = y + 0.55; root.add(riser);
  }
  // columns + lintels on the rim
  const ncol = 28, colGeo = new THREE.BoxGeometry(0.7, 4.4, 0.7), lintelGeo = new THREE.BoxGeometry(2.4, 0.5, 0.8);
  const cols = new THREE.InstancedMesh(colGeo, new THREE.MeshStandardMaterial({ color: 0x8f877a, roughness: 0.9 }), ncol), lins = new THREE.InstancedMesh(lintelGeo, new THREE.MeshStandardMaterial({ color: 0x7c746a, roughness: 0.9 }), ncol);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i < ncol; i++) {
    const a = i / ncol * Math.PI * 2, rr = R + 0.7 + 6 * 1.7 + 0.8;
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a); m4.compose(new THREE.Vector3(Math.sin(a) * rr, 3.2 + 6 * 1.1 + 2.2, Math.cos(a) * rr), q, sc); cols.setMatrixAt(i, m4);
    const a2 = a + Math.PI / ncol; q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a2 + Math.PI / 2); m4.compose(new THREE.Vector3(Math.sin(a2) * rr, 3.2 + 6 * 1.1 + 4.6, Math.cos(a2) * rr), q, sc); lins.setMatrixAt(i, m4);
  }
  cols.castShadow = true; root.add(cols, lins);
  // crowd silhouettes (instanced capsules)
  const crowdN = 360, crowd = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.22, 0.5, 2, 5), new THREE.MeshStandardMaterial({ color: 0x1c1a20, roughness: 1 }), crowdN);
  for (let i = 0; i < crowdN; i++) {
    const tier = Math.floor(rng() * 6), a = rng() * Math.PI * 2, rr = R + 0.7 + tier * 1.7 + 0.5 + rng() * 0.9;
    m4.compose(new THREE.Vector3(Math.sin(a) * rr, 3.2 + tier * 1.1 + 0.55, Math.cos(a) * rr), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a), new THREE.Vector3(1, 0.85 + rng() * 0.4, 1)); crowd.setMatrixAt(i, m4);
    crowd.setColorAt(i, new THREE.Color().setHSL(rng() * 0.12, 0.3, 0.1 + rng() * 0.08));
  }
  root.add(crowd);
  // banners
  const bannerMat = new THREE.MeshStandardMaterial({ color: 0x7a1f2b, roughness: 0.9, side: THREE.DoubleSide }), trimMat = new THREE.MeshStandardMaterial({ color: 0xc9a24a, roughness: 0.5, metalness: 0.6 });
  for (let i = 0; i < 8; i++) {
    const a = (i + 0.5) / 8 * Math.PI * 2, b = new THREE.Group(); b.position.set(Math.sin(a) * (R + 0.55), 2.7, Math.cos(a) * (R + 0.55)); b.rotation.y = a + Math.PI;
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 2.2), bannerMat); cloth.position.y = -1.0; b.add(cloth);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.08, 0.08), trimMat); b.add(bar);
    const em = new THREE.Mesh(new THREE.CircleGeometry(0.28, 6), trimMat); em.position.set(0, -0.8, 0.01); b.add(em); root.add(b);
  }

  // ---- braziers (positions come straight from the collision spec)
  const flames: { mesh: THREE.Mesh; light: THREE.PointLight; seed: number }[] = [];
  for (const c of spec.colliders) {
    const g = new THREE.Group(); g.position.set(c.x, 0, c.z);
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(c.r * 0.85, c.r, 1.0, 10), new THREE.MeshStandardMaterial({ color: 0x4a4540, roughness: 0.9 })));
    g.children[0].position.y = 0.5; g.children[0].castShadow = true;
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(c.r * 1.05, c.r * 0.6, 0.5, 10), new THREE.MeshStandardMaterial({ color: 0x2c2a2a, metalness: 0.7, roughness: 0.5 })); bowl.position.y = 1.25; g.add(bowl);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(c.r * 0.7, 1.4, 8), new THREE.MeshBasicMaterial({ color: 0xff8a2a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })); flame.position.y = 2.1; g.add(flame);
    const inner = new THREE.Mesh(new THREE.ConeGeometry(c.r * 0.4, 0.9, 8), new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })); inner.position.y = 1.9; g.add(inner);
    const light = new THREE.PointLight(0xff8a3a, 14, 15, 1.6); light.position.y = 2.4; g.add(light);
    flames.push({ mesh: flame, light, seed: rng() * 10 }); root.add(g);
  }

  // ---- lights
  root.add(new THREE.HemisphereLight(0x8d94c8, 0x3a2c1e, 0.9));
  const dir = new THREE.DirectionalLight(0xffc690, 2.2); dir.position.set(-14, 20, 10); dir.castShadow = true;
  dir.shadow.mapSize.set(1024, 1024); const sc2 = dir.shadow.camera; sc2.left = -16; sc2.right = 16; sc2.top = 16; sc2.bottom = -16; sc2.near = 1; sc2.far = 60; dir.shadow.bias = -0.0005;
  root.add(dir);

  return {
    spec, sun: dir,
    update(t: number) { for (const f of flames) { const k = 0.85 + Math.sin(t * 9 + f.seed) * 0.1 + Math.sin(t * 23 + f.seed * 2) * 0.06; f.mesh.scale.set(k, 0.9 + (k - 0.85) * 2, k); f.light.intensity = 12 + (k - 0.85) * 40; } },
    setQuality(qv) {
      dir.castShadow = qv !== 'low'; dir.shadow.mapSize.set(qv === 'high' ? 2048 : 1024, qv === 'high' ? 2048 : 1024); dir.shadow.map?.dispose(); (dir.shadow as any).map = null;
      flames.forEach((f, i) => { f.light.visible = qv === 'high' || (qv === 'balanced' && i < 2); });
      crowd.visible = qv !== 'low';
    },
    dispose() { scene.remove(root); root.traverse((o: THREE.Object3D) => { const m = o as THREE.Mesh; m.geometry?.dispose?.(); }); },
  };
}
