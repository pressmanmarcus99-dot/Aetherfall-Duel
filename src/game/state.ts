import { Loadout, defaultLoadout } from '../combat/fighter';
import { WEAPONS, getWeapon } from '../weapons/definitions';
import { ARMOR_SLOTS, getArmor } from '../armor/armor';
import type { Difficulty } from '../ai/ai';

export type Quality = 'low' | 'balanced' | 'high';
export interface GameSettings { difficulty: Difficulty; quality: Quality; autoQuality: boolean; autoLock: boolean; showFps: boolean; master: number; sfx: number; music: number; shake: number }
export interface AppState { settings: GameSettings; loadout: Loadout }

const KEY = 'aetherfall.state.v2';
export const defaultSettings = (): GameSettings => ({ difficulty: 'warrior', quality: 'balanced', autoQuality: true, autoLock: true, showFps: false, master: 0.8, sfx: 0.9, music: 0.5, shake: 1 });

export function loadState(): AppState {
  const st: AppState = { settings: defaultSettings(), loadout: defaultLoadout() };
  try {
    const j = JSON.parse(localStorage.getItem(KEY) || 'null'); if (!j) return st;
    Object.assign(st.settings, j.settings ?? {});
    const l = j.loadout; if (l) {
      if (typeof l.main === 'string' && WEAPONS[l.main]) st.loadout.main = l.main;
      if (typeof l.secondary === 'string' && WEAPONS[l.secondary]) st.loadout.secondary = l.secondary;
      st.loadout.shield = typeof l.shield === 'string' && WEAPONS[l.shield] ? l.shield : null;
      for (const s of ARMOR_SLOTS) { try { if (l.armor && getArmor(l.armor[s]).slot === s) st.loadout.armor[s] = l.armor[s]; } catch { /* unknown id: keep default */ } }
    }
  } catch { /* corrupt storage: defaults */ }
  void getWeapon;
  return st;
}
export function saveState(st: AppState) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch { /* ignore */ } }
