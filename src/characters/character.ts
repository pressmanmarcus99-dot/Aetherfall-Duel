import * as THREE from 'three';
import { ARMOR_SLOTS } from '../armor/armor';
import type { Fighter } from '../combat/fighter';
import { canUseShield, getWeapon } from '../weapons/definitions';
import { WeaponModel, buildShield, buildWeaponModel } from '../weapons/models';
import { HeldItems, ProceduralAnimator } from './animator';
import { buildCharacter, BuiltCharacter, SIDE_L, SIDE_R } from './rig';

/** Visual representation of one Fighter. Reads simulation state only; never writes to it. */
export class Character {
  readonly object: THREE.Group;
  private built: BuiltCharacter; private anim: ProceduralAnimator;
  private held: HeldItems = { main: null, off: null, shield: null };
  private heldKey = ''; private flashT = 0; private tint = new THREE.Color();
  private brokenSeen = { head: false, chest: false, arms: false, legs: false };

  constructor(public readonly fighter: Fighter, accent: number) {
    this.built = buildCharacter(fighter.armor, accent);
    this.object = this.built.rig.root;
    this.anim = new ProceduralAnimator(this.built.rig);
    this.sync(fighter);
  }

  /** Rebuild held models if the equipped weapon changed. */
  sync(f: Fighter) {
    const key = f.weapon.id + '|' + (f.shield?.id ?? '');
    if (key === this.heldKey) return;
    this.heldKey = key;
    const rig = this.built.rig;
    for (const m of [this.held.main, this.held.off, this.held.shield]) m?.group.removeFromParent();
    this.held = { main: null, off: null, shield: null };
    const w = f.weapon;
    if (w.grip === 'shield') { this.held.shield = buildShield(w); rig.fore[SIDE_L].add(this.held.shield.group); this.held.shield.group.position.set(0, -0.12, 0.1); return; }
    this.held.main = buildWeaponModel(w);
    if (w.grip === 'bow') rig.hand[SIDE_L].add(this.held.main.group); else rig.hand[SIDE_R].add(this.held.main.group);
    if (w.grip === 'dual' || w.grip === 'gauntlet') { this.held.off = buildWeaponModel(w); rig.hand[SIDE_L].add(this.held.off.group); }
    const sh = f.shield;
    if (sh && canUseShield(w.id)) { this.held.shield = buildShield(sh); rig.fore[SIDE_L].add(this.held.shield.group); this.held.shield.group.position.set(0, -0.12, 0.1); }
  }

  flash(t = 0.12) { this.flashT = t; }

  update(f: Fighter, dt: number) {
    this.sync(f);
    this.object.position.set(f.pos.x, f.pos.y, f.pos.z);
    this.object.rotation.y = f.yaw;
    this.anim.update(f, dt, this.held);
    this.refreshArmor(f);
    this.flashT = Math.max(0, this.flashT - dt);
    const fl = this.flashT > 0 ? this.flashT / 0.12 : 0;
    const burn = f.st.burnT > 0 ? 0.35 + Math.sin(performance.now() * 0.02) * 0.1 : 0, chill = f.st.chillT > 0 ? 0.25 : 0, shock = f.st.shockT > 0 && Math.sin(performance.now() * 0.05) > 0 ? 0.35 : 0;
    if (fl > 0 || burn || chill || shock) this.tint.setRGB(fl * 0.7 + burn + shock, fl * 0.7 + burn * 0.4 + chill * 0.8 + shock, fl * 0.7 + chill + shock * 0.3); else this.tint.setRGB(0, 0, 0);
    for (const m of this.built.flashMats) m.emissive.copy(this.tint);
    this.built.rig.root.visible = true;
  }

  /** Armor visuals: hide broken pieces, darken with wear. Returns slots that just broke. */
  private refreshArmor(f: Fighter) {
    for (const slot of ARMOR_SLOTS) {
      const st = f.armor[slot];
      for (const o of this.built.armorParts[slot]) o.visible = !st.broken;
      this.brokenSeen[slot] = st.broken;
      const wear = 1 - st.dur / st.def.durability;
      for (const m of this.built.armorMats[slot]) m.color.setHex(m === this.built.armorMats[slot][0] ? st.def.look.color : st.def.look.trim).multiplyScalar(1 - wear * 0.45);
    }
  }

  /** World-space tip/base of whichever weapon is actively striking (for trails). */
  weaponPoints(f: Fighter, tip: THREE.Vector3, base: THREE.Vector3): boolean {
    const a = f.attack; if (!a) return false;
    const m = f.weapon.grip === 'bow' ? null : (a.handSide < 0 && this.held.off) ? this.held.off : (this.held.main ?? this.held.shield);
    if (!m) return false;
    tip.copy(m.tip); m.group.localToWorld(tip); base.copy(m.base); m.group.localToWorld(base); return true;
  }
  /** Muzzle position for ranged effects. */
  heldGlow(): THREE.Color | null { return this.held.main?.glow ?? this.held.shield?.glow ?? null; }
  worldPoint(local: THREE.Vector3, out: THREE.Vector3) { return out.copy(local).applyMatrix4(this.object.matrixWorld); }
  dispose() { this.object.removeFromParent(); }
}
