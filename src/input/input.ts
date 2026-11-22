import { Action, ACTION_ORDER, Bindings, DEFAULT_BINDINGS, InputFrame, InputSettings, InputSource, defaultInputSettings } from './actions';

const KEY = 'aetherfall.input.v2';
export function loadInputSettings(): InputSettings {
  const d = defaultInputSettings();
  try {
    const raw = localStorage.getItem(KEY); if (!raw) return d;
    const j = JSON.parse(raw);
    if (typeof j.sensitivity === 'number') d.sensitivity = Math.min(3, Math.max(0.2, j.sensitivity));
    if (typeof j.invertY === 'boolean') d.invertY = j.invertY;
    if (j.bindings) for (const a of ACTION_ORDER) if (Array.isArray(j.bindings[a]) && j.bindings[a].every((x: unknown) => typeof x === 'string')) d.bindings[a] = j.bindings[a];
  } catch { /* storage unavailable or corrupt: defaults */ }
  return d;
}
export function saveInputSettings(s: InputSettings) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* ignore */ } }

/** Keyboard + mouse (pointer lock) implementation of InputSource. A touch/phone pad implements the same interface. */
export class KeyboardMouseInput implements InputSource {
  private down = new Set<string>(); private pressedCodes = new Set<string>();
  private dx = 0; private dy = 0; private capture: ((code: string) => void) | null = null;
  onPointerLockChange: ((locked: boolean) => void) | null = null;
  onPauseKey: (() => void) | null = null;
  private reverse: Map<string, Action[]> = new Map();
  private handlers: Array<[EventTarget, string, EventListener]> = [];

  constructor(private canvas: HTMLElement, public settings: InputSettings) {
    this.rebuild();
    const on = (t: EventTarget, type: string, fn: (e: any) => void, opts?: AddEventListenerOptions) => { t.addEventListener(type, fn as EventListener, opts); this.handlers.push([t, type, fn as EventListener]); };
    on(window, 'keydown', (e: KeyboardEvent) => {
      if (this.capture) { e.preventDefault(); const c = this.capture; this.capture = null; c(e.code); return; }
      if (e.repeat) { if (this.isGameKey(e.code)) e.preventDefault(); return; }
      if (this.isGameKey(e.code) && document.pointerLockElement) e.preventDefault();
      this.down.add(e.code); this.pressedCodes.add(e.code);
    });
    on(window, 'keyup', (e: KeyboardEvent) => { this.down.delete(e.code); });
    on(window, 'blur', () => { this.down.clear(); });
    on(canvas, 'mousedown', (e: MouseEvent) => {
      if (this.capture) { e.preventDefault(); const c = this.capture; this.capture = null; c('Mouse' + e.button); return; }
      if (!document.pointerLockElement) return;
      e.preventDefault(); const c = 'Mouse' + e.button; this.down.add(c); this.pressedCodes.add(c);
    });
    on(window, 'mouseup', (e: MouseEvent) => { this.down.delete('Mouse' + e.button); });
    on(canvas, 'contextmenu', (e: Event) => e.preventDefault());
    on(document, 'mousemove', (e: MouseEvent) => { if (document.pointerLockElement) { this.dx += e.movementX; this.dy += e.movementY; } });
    on(document, 'pointerlockchange', () => { const l = !!document.pointerLockElement; if (!l) this.down.clear(); this.onPointerLockChange?.(l); });
  }
  private isGameKey(code: string) { return this.reverse.has(code); }
  rebuild() {
    this.reverse.clear();
    for (const a of ACTION_ORDER) for (const c of this.settings.bindings[a]) { const l = this.reverse.get(c) ?? []; l.push(a); this.reverse.set(c, l); }
  }
  requestLock() { try { const p: any = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch { /* ignore */ } }
  releaseLock() { if (document.pointerLockElement) document.exitPointerLock(); }
  get locked() { return !!document.pointerLockElement; }
  /** Next key / mouse button pressed becomes the new binding (used by the settings screen). */
  listenForBinding(cb: (code: string) => void) { this.capture = cb; }
  cancelCapture() { this.capture = null; }
  resetBindings() { this.settings.bindings = JSON.parse(JSON.stringify(DEFAULT_BINDINGS)) as Bindings; this.rebuild(); }

  poll(_dt: number): InputFrame {
    const held = new Set<Action>(), pressed = new Set<Action>();
    for (const c of this.down) for (const a of this.reverse.get(c) ?? []) held.add(a);
    for (const c of this.pressedCodes) for (const a of this.reverse.get(c) ?? []) pressed.add(a);
    this.pressedCodes.clear();
    const k = 0.0022 * this.settings.sensitivity;
    let lx = this.dx * k, ly = this.dy * k * (this.settings.invertY ? -1 : 1);
    this.dx = 0; this.dy = 0;
    // arrow-key camera for trackpad/Chromebook players
    const ak = 0.045 * this.settings.sensitivity;
    if (held.has('camLeft')) lx -= ak; if (held.has('camRight')) lx += ak; if (held.has('camUp')) ly -= ak * 0.6; if (held.has('camDown')) ly += ak * 0.6;
    return { held, pressed, lookDX: lx, lookDY: ly };
  }
  dispose() { for (const [t, type, fn] of this.handlers) t.removeEventListener(type, fn); this.handlers.length = 0; }
}
