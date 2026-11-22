import type { CombatEvent } from '../combat/types';
import type { Element } from '../weapons/types';

/**
 * Fully synthesized audio (no asset files): swings, impacts, metal, magic, footsteps, ambience.
 * Events are mapped through `play(event, distance)`. Swap `Synth` voices for samples later without touching callers.
 */
export class AudioSystem {
  private ctx: AudioContext | null = null; private master!: GainNode; private sfx!: GainNode; private music!: GainNode;
  private noiseBuf: AudioBuffer | null = null; private ambience: AudioNode[] = [];
  volume = { master: 0.8, sfx: 0.9, music: 0.5 };

  /** Must be called from a user gesture. */
  unlock() {
    if (!this.ctx) {
      try {
        const AC = window.AudioContext || (window as any).webkitAudioContext; this.ctx = new AC();
        this.master = this.ctx.createGain(); this.sfx = this.ctx.createGain(); this.music = this.ctx.createGain();
        this.sfx.connect(this.master); this.music.connect(this.master);
        const comp = this.ctx.createDynamicsCompressor(); this.master.connect(comp); comp.connect(this.ctx.destination);
        const n = this.ctx.sampleRate * 1.5, b = this.ctx.createBuffer(1, n, this.ctx.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; this.noiseBuf = b;
        this.applyVolume();
      } catch { this.ctx = null; }
    }
    if (this.ctx && this.ctx.state === 'suspended') void this.ctx.resume();
  }
  applyVolume() { if (!this.ctx) return; this.master.gain.value = this.volume.master; this.sfx.gain.value = this.volume.sfx; this.music.gain.value = this.volume.music; }

  private noise(dur: number, freq: number, q: number, type: BiquadFilterType, gain: number, when = 0, sweepTo?: number, dest?: AudioNode) {
    if (!this.ctx || !this.noiseBuf) return; const c = this.ctx, t = c.currentTime + when;
    const src = c.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q; if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + Math.min(0.02, dur * 0.3)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(dest ?? this.sfx); src.start(t, Math.random()); src.stop(t + dur + 0.05);
  }
  private tone(freq: number, dur: number, type: OscillatorType, gain: number, when = 0, endFreq?: number, dest?: AudioNode) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + when;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t); if (endFreq) o.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest ?? this.sfx); o.start(t); o.stop(t + dur + 0.05);
  }
  private metal(base: number, gain: number, dur = 0.5) { for (const r of [1, 2.76, 5.4, 8.93]) this.tone(base * r, dur / (1 + r * 0.25), 'sine', gain / (1 + r * 0.5)); this.noise(0.04, 5000, 1, 'highpass', gain * 0.6); }

  ui(kind: 'click' | 'hover' | 'back' | 'confirm' = 'click') {
    if (kind === 'hover') this.tone(900, 0.04, 'sine', 0.05); else if (kind === 'back') this.tone(300, 0.1, 'triangle', 0.12, 0, 200);
    else if (kind === 'confirm') { this.tone(440, 0.12, 'triangle', 0.15); this.tone(660, 0.18, 'triangle', 0.15, 0.07); } else this.tone(520, 0.06, 'square', 0.07, 0, 380);
  }

  private swing(el: Element, heavy: boolean) {
    const g = heavy ? 0.3 : 0.18, d = heavy ? 0.38 : 0.22;
    this.noise(d, heavy ? 500 : 900, 1.2, 'bandpass', g, 0, heavy ? 1600 : 3000);
    if (el === 'fire') this.noise(d * 1.5, 300, 0.7, 'lowpass', 0.12);
    if (el === 'ice') this.tone(1800, d, 'sine', 0.05, 0, 2600);
    if (el === 'lightning') { this.tone(300, 0.1, 'sawtooth', 0.06, 0, 1200); this.noise(0.08, 6000, 1, 'highpass', 0.1); }
    if (el === 'energy') this.tone(500, d, 'sawtooth', 0.05, 0, 1400);
    if (el === 'light') { this.tone(880, d, 'sine', 0.05, 0, 1320); }
    if (el === 'earth') this.tone(90, d, 'triangle', 0.2, 0, 60);
  }

  /** Play a combat event. `dist` is the distance to the listener in metres (gain falls off). */
  play(e: CombatEvent, dist = 0) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const att = 1 / (1 + dist * 0.08); if (att < 0.15) return;
    const g = (n: number) => n * att; const el = e.element ?? 'none';
    switch (e.type) {
      case 'swing': this.swing(el, !!e.heavy); break;
      case 'hit': {
        const h = e.heavy ? 1.4 : 1;
        this.tone(130 * (e.heavy ? 0.7 : 1), 0.18, 'sine', g(0.45 * h), 0, 50); this.noise(0.12, 1800, 0.8, 'bandpass', g(0.3 * h));
        if (e.zone === 'head') this.tone(1100, 0.08, 'triangle', g(0.1));
        if (el === 'fire') this.noise(0.3, 600, 0.6, 'lowpass', g(0.2)); if (el === 'lightning') { this.noise(0.15, 5000, 1, 'highpass', g(0.25)); this.tone(150, 0.12, 'sawtooth', g(0.12), 0, 60); }
        if (el === 'ice') this.metal(1800, g(0.06), 0.4);
        break;
      }
      case 'block': this.metal(420 + Math.random() * 60, g(0.28), 0.35); this.tone(110, 0.1, 'sine', g(0.25), 0, 60); break;
      case 'parry': this.metal(1250, g(0.38), 0.7); this.tone(80, 0.15, 'sine', g(0.3), 0, 50); break;
      case 'guardbreak': this.metal(300, g(0.4), 0.6); this.tone(70, 0.4, 'sawtooth', g(0.2), 0, 35); break;
      case 'clang': this.metal(700 + Math.random() * 100, g(0.3), 0.5); break;
      case 'dodge': if (!e.blocked) this.noise(0.18, 700, 0.7, 'bandpass', g(0.14), 0, 300); else this.tone(1500, 0.08, 'sine', g(0.07)); break;
      case 'jump': this.noise(0.08, 500, 0.5, 'lowpass', g(0.08)); break;
      case 'land': this.tone(70, 0.12, 'sine', g(0.2), 0, 45); this.noise(0.1, 400, 0.5, 'lowpass', g(0.12)); break;
      case 'step': this.noise(0.05, 260 + Math.random() * 120, 0.6, 'lowpass', g(0.07)); break;
      case 'projectile': this.noise(0.2, 1400, 1, 'bandpass', g(0.12), 0, 400); if (el !== 'none') this.tone(600, 0.15, 'sine', g(0.05), 0, 900); break;
      case 'special': this.tone(220, 0.4, 'sine', g(0.12), 0, 440); break;
      case 'wave': this.tone(110, 0.5, 'sawtooth', g(0.12), 0, 70); this.noise(0.4, 400, 0.5, 'lowpass', g(0.15)); break;
      case 'burst': this.tone(70, 0.5, 'sine', g(0.4), 0, 35); this.noise(0.45, 800, 0.6, 'lowpass', g(0.25), 0, 200); break;
      case 'pulse': this.tone(300, 0.4, 'sawtooth', g(0.15), 0, 80); this.metal(900, g(0.15), 0.6); break;
      case 'ward': this.tone(660, 0.5, 'sine', g(0.12), 0, 990); this.tone(990, 0.5, 'sine', g(0.08), 0.05, 1320); break;
      case 'armorbreak': this.metal(250, g(0.4), 0.8); this.noise(0.3, 2500, 0.8, 'bandpass', g(0.25)); break;
      case 'death': this.tone(110, 0.9, 'sawtooth', g(0.25), 0, 40); this.noise(0.5, 300, 0.6, 'lowpass', g(0.2)); break;
      case 'switch': this.noise(0.1, 2500, 1, 'highpass', g(0.1)); this.metal(900, g(0.06), 0.2); break;
      case 'dash': this.noise(0.25, 600, 1, 'bandpass', g(0.18), 0, 2500); break;
      case 'riposte': this.tone(600, 0.1, 'triangle', g(0.08), 0, 900); break;
      default: break;
    }
  }

  /** Low drone + distant crowd-like noise bed. */
  startAmbience() {
    if (!this.ctx || this.ambience.length) return; const c = this.ctx;
    const mk = (f: number, type: OscillatorType, gain: number) => { const o = c.createOscillator(); o.type = type; o.frequency.value = f; const g = c.createGain(); g.gain.value = gain; o.connect(g); g.connect(this.music); o.start(); this.ambience.push(o, g); return o; };
    mk(55, 'sine', 0.12); mk(82.4, 'triangle', 0.05); const l = mk(0.07, 'sine', 40); void l;
    if (this.noiseBuf) { const s = c.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true; const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380; const g = c.createGain(); g.gain.value = 0.05; s.connect(f); f.connect(g); g.connect(this.music); s.start(); this.ambience.push(s, f, g); }
  }
  stopAmbience() { for (const n of this.ambience) { try { (n as any).stop?.(); } catch { /* already stopped */ } try { n.disconnect(); } catch { /* ignore */ } } this.ambience = []; }
}
