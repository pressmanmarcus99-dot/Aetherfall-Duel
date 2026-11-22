import type { Element } from '../weapons/types';
export const ELEMENT_COLOR: Record<Element, number> = {
  none: 0xdfe6f0, fire: 0xff7a2a, ice: 0x8fd8ff, lightning: 0xffe45e, wind: 0x9bf2d0, earth: 0xb08a58, light: 0xfff3b0, energy: 0x35f0ff,
};
export const ELEMENT_LABEL: Record<Element, string> = {
  none: 'Steel', fire: 'Fire', ice: 'Frost', lightning: 'Lightning', wind: 'Wind', earth: 'Earth', light: 'Radiance', energy: 'Cyber',
};
export const hex = (n: number) => '#' + n.toString(16).padStart(6, '0');
