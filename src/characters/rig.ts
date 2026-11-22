import * as THREE from 'three';
import { ARMOR_SLOTS, ArmorSlot, ArmorState } from '../armor/armor';

/** Skeleton as plain Object3D joints. A GLB character would supply the same named joints (see ClipAnimator). */
export interface Rig {
  root: THREE.Group; pivot: THREE.Group; hips: THREE.Group; spine: THREE.Group; chest: THREE.Group; neck: THREE.Group; head: THREE.Group;
  thigh: [THREE.Group, THREE.Group]; shin: [THREE.Group, THREE.Group];   // [right, left]
  upper: [THREE.Group, THREE.Group]; fore: [THREE.Group, THREE.Group]; hand: [THREE.Group, THREE.Group];
  cape: THREE.Group;
}
export const SIDE_R = 0, SIDE_L = 1;   // rig arrays are [right, left]; right = local -X

export const LEN = { thigh: 0.46, shin: 0.46, upper: 0.3, fore: 0.3, pivotY: 0.97 };

const std = (color: number, metal = 0.1, rough = 0.8) => new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough });
function cap(r: number, len: number, m: THREE.Material, y = 0): THREE.Mesh { const o = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 3, 8), m); o.position.y = y; o.castShadow = true; return o; }
function mesh(g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; return o; }
const grp = (parent: THREE.Object3D | null, x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.position.set(x, y, z); parent?.add(g); return g; };

export interface BuiltCharacter { rig: Rig; armorParts: Record<ArmorSlot, THREE.Object3D[]>; armorMats: Record<ArmorSlot, THREE.MeshStandardMaterial[]>; flashMats: THREE.MeshStandardMaterial[] }

export function buildCharacter(armor: Record<ArmorSlot, ArmorState>, accent: number): BuiltCharacter {
  const skin = std(0x8a6a55, 0, 0.9), cloth = std(0x262a33, 0, 0.95), dark = std(0x15171c, 0.3, 0.6);
  const flashMats: THREE.MeshStandardMaterial[] = [skin, cloth, dark];
  const root = new THREE.Group(); root.name = 'fighter';
  const pivot = grp(root, 0, LEN.pivotY, 0), hips = grp(pivot), spine = grp(hips, 0, 0.08, 0), chest = grp(spine, 0, 0.2, 0), neck = grp(chest, 0, 0.36, 0), head = grp(neck, 0, 0.1, 0);
  // base body (visible where armor is thin or broken)
  hips.add(mesh(new THREE.BoxGeometry(0.34, 0.2, 0.2), cloth, 0, 0, 0));
  const torso = mesh(new THREE.CylinderGeometry(0.22, 0.17, 0.52, 10), cloth, 0, 0.04, 0); torso.scale.z = 0.62; chest.add(torso);
  head.add(mesh(new THREE.SphereGeometry(0.1, 12, 10), skin, 0, 0, 0.0));
  neck.add(mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.1, 8), skin, 0, 0, 0));
  const thigh: Rig['thigh'] = [grp(hips, -0.12, -0.04, 0), grp(hips, 0.12, -0.04, 0)] as Rig['thigh'];
  const shin: Rig['shin'] = [grp(thigh[0], 0, -LEN.thigh, 0), grp(thigh[1], 0, -LEN.thigh, 0)] as Rig['shin'];
  const upper: Rig['upper'] = [grp(chest, -0.27, 0.3, 0), grp(chest, 0.27, 0.3, 0)] as Rig['upper'];
  const fore: Rig['fore'] = [grp(upper[0], 0, -LEN.upper, 0), grp(upper[1], 0, -LEN.upper, 0)] as Rig['fore'];
  const hand: Rig['hand'] = [grp(fore[0], 0, -LEN.fore, 0), grp(fore[1], 0, -LEN.fore, 0)] as Rig['hand'];
  for (let s = 0; s < 2; s++) {
    thigh[s].add(cap(0.075, LEN.thigh - 0.15, cloth, -LEN.thigh / 2));
    shin[s].add(cap(0.06, LEN.shin - 0.14, cloth, -LEN.shin / 2));
    shin[s].add(mesh(new THREE.BoxGeometry(0.11, 0.07, 0.26), dark, 0, -LEN.shin - 0.02, 0.06));      // boot/foot
    upper[s].add(cap(0.058, LEN.upper - 0.12, cloth, -LEN.upper / 2));
    fore[s].add(cap(0.05, LEN.fore - 0.1, cloth, -LEN.fore / 2));
    hand[s].add(mesh(new THREE.SphereGeometry(0.052, 8, 6), skin));
  }
  // cape (team colour) hangs from the shoulders
  const capeMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.95, side: THREE.DoubleSide }); flashMats.push(capeMat);
  const cape = grp(chest, 0, 0.3, -0.14);
  const capePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.95, 1, 4), capeMat); capePlane.position.y = -0.48; capePlane.castShadow = true; cape.add(capePlane);

  // ---- armor
  const armorParts = { head: [], chest: [], arms: [], legs: [] } as Record<ArmorSlot, THREE.Object3D[]>;
  const armorMats = { head: [], chest: [], arms: [], legs: [] } as Record<ArmorSlot, THREE.MeshStandardMaterial[]>;
  for (const slot of ARMOR_SLOTS) {
    const def = armor[slot].def;
    const tier = def.tier;
    const body = new THREE.MeshStandardMaterial({ color: def.look.color, metalness: tier === 'light' ? 0.15 : 0.75, roughness: tier === 'light' ? 0.85 : 0.4 });
    const trim = new THREE.MeshStandardMaterial({ color: def.look.trim, metalness: 0.85, roughness: 0.3 });
    armorMats[slot].push(body, trim); flashMats.push(body, trim);
    const add = (parent: THREE.Object3D, o: THREE.Object3D) => { parent.add(o); armorParts[slot].push(o); };
    if (slot === 'head') {
      if (tier === 'light') { const h = mesh(new THREE.SphereGeometry(0.135, 12, 10), body, 0, 0.01, -0.01); h.scale.set(1, 1.05, 1.1); add(head, h); const tail = mesh(new THREE.ConeGeometry(0.1, 0.28, 8), body, 0, -0.1, -0.12); tail.rotation.x = -0.5; add(head, tail); }
      else if (tier === 'medium') { const h = mesh(new THREE.SphereGeometry(0.135, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), body, 0, 0.0, 0); add(head, h); add(head, mesh(new THREE.BoxGeometry(0.03, 0.14, 0.03), trim, 0, -0.01, 0.125)); add(head, mesh(new THREE.BoxGeometry(0.27, 0.04, 0.05), trim, 0, 0.055, 0.1)); add(head, mesh(new THREE.BoxGeometry(0.02, 0.1, 0.12), body, 0.12, -0.06, 0.02)); add(head, mesh(new THREE.BoxGeometry(0.02, 0.1, 0.12), body, -0.12, -0.06, 0.02)); }
      else { add(head, mesh(new THREE.CylinderGeometry(0.15, 0.16, 0.34, 12), body, 0, -0.02, 0)); add(head, mesh(new THREE.SphereGeometry(0.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), body, 0, 0.15, 0)); add(head, mesh(new THREE.BoxGeometry(0.2, 0.03, 0.04), dark, 0, 0.03, 0.155)); add(head, mesh(new THREE.BoxGeometry(0.03, 0.18, 0.04), dark, 0, -0.07, 0.16)); add(head, mesh(new THREE.BoxGeometry(0.04, 0.12, 0.3), trim, 0, 0.27, -0.02)); }
    } else if (slot === 'chest') {
      const rt = tier === 'light' ? 0.235 : tier === 'medium' ? 0.265 : 0.295, rb = tier === 'light' ? 0.18 : tier === 'medium' ? 0.2 : 0.23;
      const shell = mesh(new THREE.CylinderGeometry(rt, rb, 0.5, 10), body, 0, 0.05, 0); shell.scale.z = 0.66; add(chest, shell);
      add(spine, mesh(new THREE.CylinderGeometry(rb + 0.01, rb + 0.01, 0.06, 10), trim, 0, 0.0, 0));      // belt
      if (tier !== 'light') for (const sx of [-1, 1]) { const p = mesh(new THREE.SphereGeometry(tier === 'heavy' ? 0.17 : 0.125, 10, 8), body, sx * 0.29, 0.31, 0); p.scale.set(1, 0.7, 1.05); add(chest, p); }
      if (tier === 'heavy') { add(chest, mesh(new THREE.CylinderGeometry(0.1, 0.13, 0.12, 10), trim, 0, 0.35, 0)); for (const sx of [-1, 1]) add(chest, mesh(new THREE.ConeGeometry(0.04, 0.16, 5), trim, sx * 0.33, 0.43, 0)); add(hips, mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.26, 10, 1, true), body, 0, -0.18, 0)); }
      if (tier === 'medium') add(chest, mesh(new THREE.BoxGeometry(0.12, 0.3, 0.02), trim, 0, 0.05, 0.17));
      add(chest, mesh(new THREE.BoxGeometry(0.05, 0.5, 0.02), trim, 0, 0.05, 0.19 * 0 + 0.17 * 0));
    } else if (slot === 'arms') {
      for (let s = 0; s < 2; s++) {
        const fl = tier === 'light' ? 0.18 : tier === 'medium' ? 0.26 : 0.3, fr = tier === 'light' ? 0.062 : tier === 'medium' ? 0.075 : 0.088;
        add(fore[s], mesh(new THREE.CylinderGeometry(fr, fr * 0.88, fl, 8), body, 0, -LEN.fore + fl / 2 + 0.01, 0));
        if (tier !== 'light') add(fore[s], mesh(new THREE.SphereGeometry(0.07, 8, 6), trim, 0, -0.02, 0));
        if (tier === 'heavy') { add(upper[s], mesh(new THREE.CylinderGeometry(0.085, 0.075, 0.24, 8), body, 0, -LEN.upper / 2, 0)); add(hand[s], mesh(new THREE.BoxGeometry(0.1, 0.1, 0.12), body, 0, 0, 0.01)); }
      }
    } else {
      for (let s = 0; s < 2; s++) {
        const sl = tier === 'light' ? 0.28 : 0.4, sr = tier === 'light' ? 0.07 : tier === 'medium' ? 0.085 : 0.1;
        add(shin[s], mesh(new THREE.CylinderGeometry(sr, sr * 0.82, sl, 8), body, 0, -LEN.shin + sl / 2 + 0.02, 0));
        if (tier !== 'light') add(shin[s], mesh(new THREE.SphereGeometry(0.085, 8, 6), trim, 0, 0.0, 0.04));
        if (tier === 'heavy') { add(thigh[s], mesh(new THREE.CylinderGeometry(0.115, 0.1, 0.38, 8), body, 0, -0.23, 0)); add(shin[s], mesh(new THREE.ConeGeometry(0.035, 0.1, 5), trim, 0, 0.0, 0.1)); }
        if (tier === 'medium') add(thigh[s], mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.2, 8), body, 0, -0.14, 0));
      }
    }
  }
  return { rig: { root, pivot, hips, spine, chest, neck, head, thigh, shin, upper, fore, hand, cape }, armorParts, armorMats, flashMats };
}
