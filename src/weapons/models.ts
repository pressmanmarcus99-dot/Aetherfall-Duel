import * as THREE from 'three';
import type { WeaponDef } from './types';
import { ELEMENT_COLOR } from '../effects/palette';
import { getGLBOverride } from '../assets/registry';

/**
 * Procedural stand-in weapon models. Convention shared with any GLB replacement:
 * origin = grip centre, blade/shaft points along +Y, "forward face" toward +Z.
 * `tip` is the local-space tip point (for trails), `grip2` is where the off hand goes on two-handers.
 */
export interface WeaponModel { group: THREE.Group; tip: THREE.Vector3; base: THREE.Vector3; grip2: number | null; glow: THREE.Color | null }

const mats = new Map<string, THREE.MeshStandardMaterial>();
function mat(color: number, metal = 0.8, rough = 0.35, emissive = 0, ei = 0): THREE.MeshStandardMaterial {
  const key = [color, metal, rough, emissive, ei].join('_');
  let m = mats.get(key);
  if (!m) { m = new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough, emissive, emissiveIntensity: ei }); mats.set(key, m); }
  return m;
}
const box = (w: number, h: number, d: number, m: THREE.Material, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.castShadow = true; return o; };
const cyl = (rt: number, rb: number, h: number, m: THREE.Material, x = 0, y = 0, z = 0, seg = 8) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); o.position.set(x, y, z); o.castShadow = true; return o; };
const cone = (r: number, h: number, m: THREE.Material, x = 0, y = 0, z = 0, seg = 8) => { const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m); o.position.set(x, y, z); o.castShadow = true; return o; };
const ball = (r: number, m: THREE.Material, x = 0, y = 0, z = 0, seg = 10) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, seg - 2)), m); o.position.set(x, y, z); o.castShadow = true; return o; };

const GRIP = () => mat(0x2a1d14, 0.1, 0.9);
const GOLD = () => mat(0xc9a24a, 0.9, 0.3);

/** Straight blade from y0 to y0+len with a pointed tip. */
function blade(g: THREE.Group, len: number, w: number, t: number, m: THREE.Material, y0: number) {
  g.add(box(w, len - w, t, m, 0, y0 + (len - w) / 2, 0));
  const tip = cone(w * 0.72, w * 1.6, m, 0, y0 + len - w * 0.5, 0, 4); tip.scale.z = t / w; tip.rotation.y = Math.PI / 4; g.add(tip);
  g.add(box(w * 0.18, len - w, t * 1.4, mat(0xe8eef6, 0.95, 0.15), 0, y0 + (len - w) / 2, 0));   // bevel/fuller highlight
}
function hilt(g: THREE.Group, guardW: number, handleLen: number, y = 0) {
  g.add(cyl(0.025, 0.025, handleLen, GRIP(), 0, y - handleLen / 2 + 0.02));
  g.add(box(guardW, 0.04, 0.07, GOLD(), 0, y + 0.03, 0));
  g.add(ball(0.04, GOLD(), 0, y - handleLen + 0.01));
}

export function buildWeaponModel(def: WeaponDef): WeaponModel {
  const ov = getGLBOverride(def.id);
  if (ov) return ov();
  const g = new THREE.Group(); g.name = 'weapon_' + def.id;
  const steel = mat(def.color, 0.85, 0.28);
  const ec = ELEMENT_COLOR[def.element];
  const glowMat = mat(ec, 0.2, 0.3, ec, 1.4);
  let len = def.length, grip2: number | null = null, glow: THREE.Color | null = def.element !== 'none' ? new THREE.Color(ec) : null;
  switch (def.id) {
    case 'greatsword': blade(g, 1.55, 0.17, 0.035, steel, 0.08); hilt(g, 0.42, 0.42); grip2 = -0.25; len = 1.65; break;
    case 'longsword': blade(g, 1.0, 0.085, 0.025, steel, 0.06); hilt(g, 0.26, 0.25); len = 1.08; break;
    case 'rapier': blade(g, 1.15, 0.035, 0.02, steel, 0.06); hilt(g, 0.16, 0.2); g.add(ball(0.09, GOLD(), 0, 0.05, 0.02, 8)); len = 1.2; break;
    case 'dagger': blade(g, 0.36, 0.06, 0.02, steel, 0.05); hilt(g, 0.13, 0.12); len = 0.42; break;
    case 'axe': g.add(cyl(0.028, 0.028, 1.15, GRIP(), 0, 0.28)); g.add(box(0.05, 0.3, 0.3, steel, 0, 0.78, 0.13)); g.add(box(0.04, 0.12, 0.1, steel, 0, 0.78, -0.08)); grip2 = -0.15; len = 1.35; break;
    case 'spear': g.add(cyl(0.025, 0.025, 2.0, GRIP(), 0, 0.5)); g.add(cone(0.06, 0.34, steel, 0, 1.68, 0, 4)); g.add(box(0.12, 0.03, 0.03, GOLD(), 0, 1.5, 0)); grip2 = -0.4; len = 1.9; break;
    case 'polearm': g.add(cyl(0.03, 0.03, 2.0, GRIP(), 0, 0.5)); g.add(box(0.04, 0.34, 0.3, steel, 0, 1.35, 0.14)); g.add(cone(0.04, 0.3, steel, 0, 1.68, 0, 4)); g.add(box(0.04, 0.16, 0.1, steel, 0, 1.32, -0.12)); grip2 = -0.4; len = 1.85; break;
    case 'hammer': g.add(cyl(0.03, 0.03, 1.25, GRIP(), 0, 0.3)); g.add(box(0.2, 0.26, 0.42, steel, 0, 0.95, 0)); g.add(box(0.22, 0.05, 0.44, GOLD(), 0, 0.95, 0)); grip2 = -0.2; len = 1.1; break;
    case 'dualblades': blade(g, 0.62, 0.06, 0.02, steel, 0.05); hilt(g, 0.12, 0.16); g.rotation.z = 0; len = 0.7; break;
    case 'windblades': blade(g, 0.7, 0.07, 0.015, mat(0xbfeedd, 0.6, 0.2, ec, 0.5), 0.05); hilt(g, 0.1, 0.16); g.add(box(0.015, 0.4, 0.2, glowMat, 0, 0.3, -0.04)); len = 0.78; break;
    case 'flamesword': blade(g, 1.15, 0.1, 0.03, mat(0x3b2a26, 0.8, 0.3, ec, 0.9), 0.06); hilt(g, 0.3, 0.26); g.add(box(0.03, 1.0, 0.045, glowMat, 0, 0.6, 0)); len = 1.22; break;
    case 'icelance': g.add(cyl(0.025, 0.025, 1.9, mat(0x6d7f93, 0.7, 0.3), 0, 0.45)); g.add(cone(0.09, 0.55, mat(0xbfeaff, 0.3, 0.1, ec, 0.8), 0, 1.7, 0, 5)); g.add(cone(0.05, 0.3, glowMat, 0.1, 1.4, 0, 5)); g.add(cone(0.05, 0.3, glowMat, -0.1, 1.4, 0, 5)); grip2 = -0.4; len = 2.0; break;
    case 'lightning': // gauntlet fist: handled as a spiked emissive knuckle block
      g.add(box(0.16, 0.1, 0.2, steel, 0, 0.05, 0.05)); for (let i = -1; i <= 1; i++) g.add(cone(0.025, 0.1, glowMat, i * 0.05, 0.1, 0.17, 4)); g.add(ball(0.05, glowMat, 0, 0.0, 0.0, 8)); len = 0.35; break;
    case 'earthmaul': g.add(cyl(0.035, 0.035, 1.3, mat(0x4a3a2a, 0.1, 0.9), 0, 0.3)); { const h = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3, 0), mat(0x6b5a45, 0.2, 0.9)); h.position.y = 1.0; h.scale.set(1, 0.85, 1.35); h.castShadow = true; g.add(h); } g.add(box(0.09, 0.45, 0.09, glowMat, 0, 1.0, 0.2)); grip2 = -0.25; len = 1.3; break;
    case 'lightblade': blade(g, 1.05, 0.09, 0.02, mat(0xfff7d0, 0.3, 0.15, ec, 1.1), 0.06); hilt(g, 0.28, 0.24); g.add(ball(0.06, glowMat, 0, 0.03)); len = 1.12; break;
    case 'cyberblade': blade(g, 1.05, 0.08, 0.03, mat(0x15191f, 0.9, 0.2), 0.06); hilt(g, 0.18, 0.26); g.add(box(0.02, 0.95, 0.035, glowMat, 0, 0.58, 0)); for (let i = 0; i < 4; i++) g.add(box(0.1, 0.02, 0.04, glowMat, 0, 0.2 + i * 0.22, 0)); len = 1.12; break;
    case 'bow': {
      const bowMat = mat(0x6b4a2a, 0.1, 0.7);
      const arc = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.022, 6, 24, Math.PI), bowMat); arc.rotation.z = -Math.PI / 2; arc.rotation.y = 0; arc.position.set(0, 0, 0); arc.scale.set(0.5, 1, 1);
      g.add(arc);
      const string = box(0.006, 1.1, 0.006, mat(0xdddddd, 0, 0.8), -0.275 * 0.5 * 0, 0, 0); string.position.x = 0; string.position.z = -0.0; string.position.y = 0; g.add(string);
      grip2 = null; len = 1.1; break;
    }
    case 'energyshield': case 'kiteshield': return buildShield(def);
    default: blade(g, def.length, 0.08, 0.025, steel, 0.06); hilt(g, 0.22, 0.22);
  }
  const tip = new THREE.Vector3(0, len, 0), base = new THREE.Vector3(0, len * 0.35, 0);
  if (def.id === 'lightning') { tip.set(0, 0.1, 0.2); base.set(0, 0.05, 0); }
  return { group: g, tip, base, grip2, glow };
}

/** Shields are held on the left forearm: origin at the forearm grip, face toward +Z. */
export function buildShield(def: WeaponDef): WeaponModel {
  const g = new THREE.Group(); g.name = 'shield_' + def.id;
  const ec = ELEMENT_COLOR[def.element];
  if (def.id === 'energyshield') {
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.04, 6), mat(0x10202a, 0.8, 0.25)); plate.rotation.x = Math.PI / 2; plate.castShadow = true; g.add(plate);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.018, 6, 6), mat(ec, 0.2, 0.3, ec, 1.8)); ring.rotation.z = Math.PI / 6; ring.position.z = 0.025; g.add(ring);
    const field = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.01, 6), new THREE.MeshBasicMaterial({ color: ec, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false })); field.rotation.x = Math.PI / 2; field.position.z = 0.03; g.add(field);
    return { group: g, tip: new THREE.Vector3(0, 0, 0.3), base: new THREE.Vector3(0, 0, 0), grip2: null, glow: new THREE.Color(ec) };
  }
  const shape = new THREE.Shape(); shape.moveTo(-0.3, 0.42); shape.lineTo(0.3, 0.42); shape.lineTo(0.3, 0.05); shape.quadraticCurveTo(0.28, -0.35, 0, -0.62); shape.quadraticCurveTo(-0.28, -0.35, -0.3, 0.05); shape.closePath();
  const body = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 1 }), mat(def.color, 0.7, 0.4)); body.castShadow = true; g.add(body);
  g.add(box(0.06, 0.95, 0.03, GOLD(), 0, -0.05, 0.085)); g.add(box(0.5, 0.06, 0.03, GOLD(), 0, 0.12, 0.085)); g.add(ball(0.07, GOLD(), 0, 0.12, 0.1, 8));
  return { group: g, tip: new THREE.Vector3(0, 0, 0.3), base: new THREE.Vector3(0, 0, 0), grip2: null, glow: null };
}
