/** Abstract game actions. Keyboard, gamepad, and a future phone controller all map onto these. */
export type Action =
  | 'forward' | 'back' | 'left' | 'right' | 'sprint' | 'jump' | 'light' | 'heavy' | 'special'
  | 'block' | 'dodge' | 'lockon' | 'switchMain' | 'switchSecondary' | 'switchToggle' | 'pause'
  | 'camLeft' | 'camRight' | 'camUp' | 'camDown';

export const ACTION_LABELS: Record<Action, string> = {
  forward: 'Move forward', back: 'Move back', left: 'Move left', right: 'Move right', sprint: 'Sprint', jump: 'Jump',
  light: 'Light attack', heavy: 'Heavy attack', special: 'Special', block: 'Block / Parry', dodge: 'Dodge', lockon: 'Lock on',
  switchMain: 'Main weapon', switchSecondary: 'Secondary weapon', switchToggle: 'Swap weapon', pause: 'Pause',
  camLeft: 'Camera left', camRight: 'Camera right', camUp: 'Camera up', camDown: 'Camera down',
};
export const ACTION_ORDER = Object.keys(ACTION_LABELS) as Action[];

/** Binding codes: KeyboardEvent.code, or 'Mouse0' (left) / 'Mouse2' (right) / 'Mouse1' (middle). */
export type Bindings = Record<Action, string[]>;
export const DEFAULT_BINDINGS: Bindings = {
  forward: ['KeyW'], back: ['KeyS'], left: ['KeyA'], right: ['KeyD'], sprint: ['ShiftLeft'], jump: ['Space'],
  light: ['Mouse0'], heavy: ['KeyE'], special: ['KeyV'], block: ['Mouse2', 'KeyQ'], dodge: ['KeyC', 'AltLeft'],
  lockon: ['Tab', 'KeyZ', 'Mouse1'], switchMain: ['Digit1'], switchSecondary: ['Digit2'], switchToggle: ['KeyX'], pause: ['Escape'],
  camLeft: ['ArrowLeft'], camRight: ['ArrowRight'], camUp: ['ArrowUp'], camDown: ['ArrowDown'],
};
export interface InputSettings { sensitivity: number; invertY: boolean; bindings: Bindings }
export const defaultInputSettings = (): InputSettings => ({ sensitivity: 1, invertY: false, bindings: JSON.parse(JSON.stringify(DEFAULT_BINDINGS)) });

/** Frame snapshot every input source must produce. A touch/phone pad only has to implement InputSource. */
export interface InputFrame {
  held: Set<Action>; pressed: Set<Action>;
  lookDX: number; lookDY: number;        // radians this frame
}
export interface InputSource { poll(dt: number): InputFrame; dispose(): void }

export function prettyCode(code: string): string {
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code === 'Mouse0') return 'Left Click'; if (code === 'Mouse1') return 'Middle Click'; if (code === 'Mouse2') return 'Right Click';
  return code.replace('Left', ' L').replace('Right', ' R').replace('Arrow', '↑'.length ? '' : '');
}
