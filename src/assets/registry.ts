import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { WeaponModel } from '../weapons/models';

/**
 * Asset registry: the hook for replacing procedural placeholders with real models (e.g. Tripo exports).
 *
 *   registerWeaponGLB('greatsword', '/assets/weapons/greatsword.glb', { length: 1.7, grip2: -0.25 });
 *   registerCharacterGLB('/assets/characters/knight.glb');
 *
 * Weapon GLB conventions: origin at the grip, blade along +Y, forward face toward +Z, 1 unit = 1 metre.
 * Registered models are loaded up-front via `preloadAssets()`; weapons without one stay procedural.
 */
interface WeaponGLB { url: string; length: number; grip2: number | null; scene?: THREE.Group }
const weaponGLBs = new Map<string, WeaponGLB>();
let characterGLB: { url: string; scene?: THREE.Group; clips?: THREE.AnimationClip[] } | null = null;

export function registerWeaponGLB(id: string, url: string, opts: { length: number; grip2?: number | null }) {
  weaponGLBs.set(id, { url, length: opts.length, grip2: opts.grip2 ?? null });
}
export function registerCharacterGLB(url: string) { characterGLB = { url }; }
export function getCharacterGLB() { return characterGLB && characterGLB.scene ? characterGLB : null; }

export async function preloadAssets(): Promise<void> {
  const loader = new GLTFLoader();
  const jobs: Promise<void>[] = [];
  for (const [id, w] of weaponGLBs) {
    jobs.push(loader.loadAsync(w.url).then(gltf => { w.scene = gltf.scene; }).catch(() => { console.warn('[assets] weapon GLB failed, keeping procedural model:', id); weaponGLBs.delete(id); }));
  }
  if (characterGLB) {
    const c = characterGLB;
    jobs.push(loader.loadAsync(c.url).then(gltf => { c.scene = gltf.scene; c.clips = gltf.animations; }).catch(() => { console.warn('[assets] character GLB failed, keeping procedural rig'); characterGLB = null; }));
  }
  await Promise.all(jobs);
}

/** Returns a factory when a loaded GLB exists for this weapon id. */
export function getGLBOverride(id: string): (() => WeaponModel) | null {
  const w = weaponGLBs.get(id);
  if (!w || !w.scene) return null;
  return () => {
    const group = new THREE.Group(); group.add(w.scene!.clone(true));
    return { group, tip: new THREE.Vector3(0, w.length, 0), base: new THREE.Vector3(0, w.length * 0.35, 0), grip2: w.grip2, glow: null };
  };
}
