import * as THREE from 'three';
import { CombatWorld } from '../combat/world';
import { Fighter, Loadout, defaultLoadout } from '../combat/fighter';
import { Intent, CombatEvent, emptyIntent } from '../combat/types';
import { AIController, Difficulty } from '../ai/ai';
import { COLOSSEUM } from '../arenas/spec';
import { ArenaVisual, buildColosseum } from '../arenas/colosseum';
import { CameraRig } from '../camera/camera';
import { Character } from '../characters/character';
import { Effects } from '../effects/effects';
import { AudioSystem } from '../audio/audio';
import { KeyboardMouseInput, loadInputSettings } from '../input/input';
import { Action, InputFrame } from '../input/actions';
import { UI, ResultStats } from '../UI/ui';
import { AppState, Quality, loadState, saveState } from './state';
import { WEAPON_ORDER, getWeapon } from '../weapons/definitions';
import { DEFAULT_ARMOR, ARMOR_SLOTS } from '../armor/armor';
import { makeRng, yawTo, wrapAngle } from '../core/math';
import { preloadAssets } from '../assets/registry';
import { NetClient, defaultServerUrl, saveServerUrl } from '../net/client';
import { RemoteInput, SmoothTarget, applyFighter, applyProjectiles, eventFromNet, eventToNet, packIntent, sanitizeLoadout, snapFighter, snapProjectile } from '../net/protocol';
import { lerpAngle } from '../core/math';

type Phase = 'menu' | 'countdown' | 'fight' | 'ending' | 'paused' | 'result';
const STEP = 1 / 60;

export class Game {
  private renderer: THREE.WebGLRenderer; private scene = new THREE.Scene(); private camera: THREE.PerspectiveCamera; private rig: CameraRig;
  private arena: ArenaVisual; private effects = new Effects(); private audio = new AudioSystem(); private input: KeyboardMouseInput; private ui: UI;
  private state: AppState = loadState();
  private world: CombatWorld | null = null; private chars = new Map<number, Character>();
  private player!: Fighter; private enemy: Fighter | null = null; private ai: AIController | null = null;
  private mode: 'duel' | 'practice' = 'duel'; private phase: Phase = 'menu'; private resumePhase: Phase = 'fight';
  private latched = new Set<Action>(); private frame: InputFrame = { held: new Set(), pressed: new Set(), lookDX: 0, lookDY: 0 };
  private acc = 0; private last = 0; private t = 0; private countdownT = 0; private endT = 0; private bannerT = 0; private respawnT = 0; private dummyT = 3;
  private stats = { damage: 0, hits: 0, parries: 0, dodges: 0, blocks: 0, time: 0, won: false };
  private fpsAvg = 60; private slowT = 0; private canvas: HTMLCanvasElement; private previewKey = ''; private vec = new THREE.Vector3(); private enemyLabel = '';
  private rng = makeRng(Date.now() & 0xffff);
  // ---- multiplayer (host-authoritative; see net/protocol.ts)
  private net: NetClient | null = null; private netRole: 'host' | 'guest' | null = null; private remote = new RemoteInput(); private netEvents: any[] = [];
  private snapAcc = 0; private guestLoadout: Loadout | null = null; private targets: (SmoothTarget | null)[] = [null, null]; private snapAt = 0; private firstSnap = true; private menuOpen = false;

  constructor(private host: HTMLElement) {
    this.canvas = document.createElement('canvas'); this.canvas.id = 'view'; this.canvas.tabIndex = 0; host.appendChild(this.canvas);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.05;
    this.camera = new THREE.PerspectiveCamera(66, 1, 0.1, 220);
    this.arena = buildColosseum(this.scene); this.scene.add(this.effects.group);
    this.rig = new CameraRig(this.camera, COLOSSEUM);
    this.input = new KeyboardMouseInput(this.canvas, loadInputSettings());
    this.ui = new UI(host, this.state, this.input, this.audio, {
      startMatch: m => this.startMatch(m), resume: () => this.resume(), restart: () => this.restart(), toMenu: () => this.toMenu(),
      settingsChanged: () => this.applySettings(), hostGame: u => void this.hostGame(u), joinGame: (u, c) => void this.joinGame(u, c),
    });
    this.input.onPointerLockChange = locked => { if (!locked && (this.phase === 'countdown' || this.phase === 'fight' || this.phase === 'ending')) this.pause(); };
    document.addEventListener('pointerlockerror', () => { if (this.phase === 'countdown' || this.phase === 'fight' || this.phase === 'ending') this.pause(); });
    window.addEventListener('keydown', e => { if (e.code === 'Escape' && (this.phase === 'paused' || this.menuOpen) && this.ui.current === 'pause') this.resume(); });
    window.addEventListener('pointerdown', () => { this.audio.unlock(); this.audio.startAmbience(); }, { once: false });
    window.addEventListener('resize', () => this.resize());
    this.applySettings(); this.resize();
  }

  async start() {
    try { await preloadAssets(); } catch { /* procedural fallbacks remain */ }
    this.toMenu();
    this.last = performance.now(); requestAnimationFrame(t => this.loop(t));
  }

  // ------------------------------------------------------------------ settings / quality
  private applySettings() {
    const s = this.state.settings;
    this.audio.volume = { master: s.master, sfx: s.sfx, music: s.music }; this.audio.applyVolume();
    this.applyQuality(s.quality);
  }
  private applyQuality(q: Quality) {
    const dpr = window.devicePixelRatio || 1;
    this.renderer.setPixelRatio(q === 'low' ? Math.min(dpr, 1) * 0.75 : q === 'balanced' ? Math.min(dpr, 1.25) : Math.min(dpr, 2));
    this.renderer.shadowMap.enabled = q !== 'low'; this.effects.density = q === 'low' ? 0.5 : q === 'balanced' ? 0.8 : 1;
    this.arena.setQuality(q); this.resize();
  }
  private resize() { const w = this.host.clientWidth || window.innerWidth, h = this.host.clientHeight || window.innerHeight; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }

  // ------------------------------------------------------------------ match lifecycle
  private clearWorld() {
    for (const c of this.chars.values()) c.dispose(); this.chars.clear(); this.effects.clearAll(); this.world = null; this.ai = null; this.enemy = null;
  }
  private enemyLoadout(d: Difficulty): Loadout {
    const pick = () => WEAPON_ORDER[Math.floor(this.rng() * WEAPON_ORDER.length)];
    const main = pick(); let sec = pick(); if (sec === main) sec = WEAPON_ORDER[(WEAPON_ORDER.indexOf(main) + 3) % WEAPON_ORDER.length];
    const tiers: Record<Difficulty, string[]> = { novice: ['light'], warrior: ['light', 'medium'], veteran: ['medium', 'heavy'], master: ['medium', 'heavy', 'heavy'] };
    const armor = { ...DEFAULT_ARMOR };
    for (const s of ARMOR_SLOTS) { const t = tiers[d]; armor[s] = `${s}_${t[Math.floor(this.rng() * t.length)]}`; }
    const shield = getWeapon(main).grip === 'one' && this.rng() < 0.35 ? 'kiteshield' : null;
    return { main, secondary: sec, shield, armor };
  }
  private addChar(f: Fighter, accent: number) { const c = new Character(f, accent); this.chars.set(f.id, c); this.scene.add(c.object); return c; }

  private startMatch(mode: 'duel' | 'practice', netCfg?: { role: 'host' | 'guest'; hostLoadout: Loadout; guestLoadout: Loadout }) {
    this.audio.unlock(); this.audio.startAmbience();
    if (!netCfg && this.net) this.dropNet();
    this.mode = mode; this.clearWorld(); this.menuOpen = false; this.targets = [null, null]; this.firstSnap = true; this.snapAcc = 0; this.netEvents = []; this.remote.reset();
    const w = new CombatWorld(COLOSSEUM, (Math.random() * 1e6) | 0); this.world = w;
    const diff = this.state.settings.difficulty;
    let eload: Loadout;
    if (netCfg) {
      const a = w.add('Host', 0, netCfg.hostLoadout, 0), b = w.add('Guest', 1, netCfg.guestLoadout, 1);
      this.player = netCfg.role === 'host' ? a : b; this.enemy = netCfg.role === 'host' ? b : a; this.ai = null; this.enemyLabel = 'Opponent'; eload = defaultLoadout();
    } else {
      this.player = w.add('You', 0, JSON.parse(JSON.stringify(this.state.loadout)), 0);
      eload = mode === 'practice' ? { ...defaultLoadout(), main: 'longsword', secondary: 'spear' } : this.enemyLoadout(diff);
      this.enemy = w.add(mode === 'practice' ? 'Training Dummy' : 'Rival', 1, eload, 1);
      this.ai = mode === 'practice' ? null : new AIController(this.enemy, diff, (Math.random() * 1e5) | 0);
      this.enemyLabel = mode === 'practice' ? 'Training Dummy' : `${diff[0].toUpperCase() + diff.slice(1)} · ${getWeapon(eload.main).name}`;
    }
    this.addChar(this.player, 0x24478f); this.addChar(this.enemy, 0x8a2230);
    this.rig.lockOn = this.state.settings.autoLock; this.rig.snapBehind(this.player);
    this.stats = { damage: 0, hits: 0, parries: 0, dodges: 0, blocks: 0, time: 0, won: false };
    this.latched.clear(); this.acc = 0; this.countdownT = 1.6; this.phase = 'countdown'; this.bannerT = 0; this.respawnT = 0; this.dummyT = 3;
    this.ui.resetGhost(); this.ui.show('none'); this.ui.banner('READY'); this.ui.setHints(this.hintHtml());
    this.input.requestLock();
  }
  private hintHtml() { return '<b>LMB</b> light · <b>E</b> heavy · <b>RMB</b> block / parry · <b>C</b> dodge · <b>V</b> special · <b>Tab</b> lock-on · <b>1/2/X</b> weapons'; }

  private pause() {
    if (this.phase === 'paused' || this.menuOpen) return;
    this.input.releaseLock(); this.ui.netMode = !!this.netRole;
    if (this.netRole) { this.menuOpen = true; this.ui.show('pause'); return; }      // online: the match keeps running behind the menu
    this.resumePhase = this.phase; this.phase = 'paused'; this.ui.show('pause');
  }
  private resume() {
    if (this.menuOpen) { this.menuOpen = false; this.latched.clear(); this.ui.show('none'); this.input.requestLock(); return; }
    if (this.phase !== 'paused') return;
    this.phase = this.resumePhase; this.latched.clear(); this.last = performance.now(); this.ui.show('none'); this.input.requestLock();
  }
  private toMenu() {
    if (this.net) this.dropNet();
    this.clearWorld(); this.phase = 'menu'; this.menuOpen = false; this.input.releaseLock(); this.ui.banner(''); this.ui.show('menu'); this.buildPreview();
  }
  private finish(won: boolean) {
    this.phase = 'result'; this.menuOpen = false; this.stats.won = won; this.input.releaseLock(); this.ui.banner('');
    const r: ResultStats = { won, time: this.stats.time, damage: this.stats.damage, hits: this.stats.hits, parries: this.stats.parries, dodges: this.stats.dodges, blocks: this.stats.blocks, mode: this.mode };
    if (this.netRole === 'host') this.net?.send({ t: 'result', hostWon: won, tm: this.stats.time });
    this.ui.netMode = !!this.netRole; this.ui.show('result', r);
  }

  /** Menu background: both fighters idle in the arena with the player's current loadout, camera slowly orbiting. */
  private buildPreview() {
    this.clearWorld();
    const w = new CombatWorld(COLOSSEUM, 5); this.world = w;
    const a = w.add('You', 0, JSON.parse(JSON.stringify(this.state.loadout)), 0), b = w.add('Rival', 1, { ...defaultLoadout(), main: 'spear', secondary: 'axe' }, 1);
    a.pos.x = -1.7; a.pos.z = 0; a.yaw = Math.PI / 2; b.pos.x = 1.7; b.pos.z = 0; b.yaw = -Math.PI / 2;
    this.player = a; this.enemy = b; this.addChar(a, 0x24478f); this.addChar(b, 0x8a2230);
    this.previewKey = JSON.stringify(this.state.loadout);
  }

  // ------------------------------------------------------------------ intents
  private playerIntent(): Intent {
    const p = this.player, it = emptyIntent(), h = this.frame.held, pr = this.latched, cy = this.rig.yaw;
    const fx = Math.sin(cy), fz = Math.cos(cy), rx = -Math.cos(cy), rz = Math.sin(cy);
    const f = (h.has('forward') ? 1 : 0) - (h.has('back') ? 1 : 0), r = (h.has('right') ? 1 : 0) - (h.has('left') ? 1 : 0);
    let mx = fx * f + rx * r, mz = fz * f + rz * r; const m = Math.hypot(mx, mz); if (m > 1) { mx /= m; mz /= m; }
    it.move.x = mx; it.move.z = mz;
    const foe = this.enemy && !this.enemy.dead ? this.enemy : null;
    let face = cy;
    if (this.rig.lockOn && foe) face = yawTo(foe.pos.x - p.pos.x, foe.pos.z - p.pos.z);
    else if (m > 0.1 && !h.has('block')) face = Math.atan2(mx, mz);
    const attacking = pr.has('light') || pr.has('heavy') || pr.has('special');
    if (attacking && foe && !this.rig.lockOn) {                    // soft aim assist toward a nearby foe in front of the camera
      const dx = foe.pos.x - p.pos.x, dz = foe.pos.z - p.pos.z, d = Math.hypot(dx, dz), ang = yawTo(dx, dz);
      if (d < 5.5 && Math.abs(wrapAngle(ang - cy)) < 1.0) face = ang; else face = cy;
    }
    it.faceYaw = face; it.sprint = h.has('sprint'); it.blockHeld = h.has('block');
    it.jumpPressed = pr.has('jump'); it.dodgePressed = pr.has('dodge'); it.lightPressed = pr.has('light'); it.heavyPressed = pr.has('heavy'); it.specialPressed = pr.has('special'); it.blockPressed = pr.has('block');
    it.switchTo = pr.has('switchMain') ? 1 : pr.has('switchSecondary') ? 2 : pr.has('switchToggle') ? 3 : 0;
    return it;
  }
  private dummyIntent(dt: number): Intent {
    const it = emptyIntent(), d = this.enemy!, p = this.player;
    it.faceYaw = yawTo(p.pos.x - d.pos.x, p.pos.z - d.pos.z);
    this.dummyT -= dt;
    if (this.dummyT <= 0 && d.action === 'idle') {
      const dist = Math.hypot(p.pos.x - d.pos.x, p.pos.z - d.pos.z);
      if (dist < 3) { it.lightPressed = true; this.dummyT = 3.2; } else this.dummyT = 0.6;
    }
    if (d.health < d.maxHealth * 0.3 && !d.dead) d.health = d.maxHealth;
    return it;
  }

  // ------------------------------------------------------------------ events
  private onEvent(e: CombatEvent) {
    const p = this.player; if (!p) return;
    this.effects.handle(e);
    const dx = e.pos.x - p.pos.x, dz = e.pos.z - p.pos.z; this.audio.play(e, Math.hypot(dx, dz));
    const shake = this.state.settings.shake, mine = e.target === p.id, byMe = e.attacker === p.id;
    switch (e.type) {
      case 'hit': {
        const tc = e.target !== undefined ? this.chars.get(e.target) : undefined; tc?.flash();
        if (mine) { this.rig.addShake((e.heavy ? 0.75 : 0.45) * shake); this.ui.vignette(e.heavy ? 0.8 : 0.5); }
        if (byMe) { this.stats.hits++; this.stats.damage += e.dmg ?? 0; this.rig.addShake((e.heavy ? 0.3 : 0.12) * shake); }
        break;
      }
      case 'block': if (mine) { this.stats.blocks++; this.rig.addShake(0.2 * shake); } break;
      case 'parry': if (mine) { this.stats.parries++; this.ui.toast('PARRY', 'good'); this.rig.addShake(0.3 * shake); } else if (byMe) this.ui.toast('PARRIED', 'bad'); break;
      case 'dodge': if (mine && e.blocked) this.stats.dodges++; break;
      case 'guardbreak': this.ui.toast(mine ? 'GUARD BROKEN' : 'GUARD BREAK', mine ? 'bad' : 'good'); this.rig.addShake(0.4 * shake); break;
      case 'armorbreak': this.ui.toast(mine ? 'ARMOR BROKEN' : 'ENEMY ARMOR BROKEN', mine ? 'bad' : 'good'); this.rig.addShake(0.4 * shake); break;
      case 'death': this.rig.addShake(0.8 * shake); break;
      case 'burst': case 'pulse': case 'wave': case 'dash': if (Math.hypot(dx, dz) < 9) this.rig.addShake(0.22 * shake); break;
      default: break;
    }
  }

  // ------------------------------------------------------------------ main loop
  private loop = (now: number) => {
    requestAnimationFrame(this.loop);
    const dt = Math.min(0.1, Math.max(0.0001, (now - this.last) / 1000)); this.last = now; this.t += dt;
    this.fpsAvg += (1 / dt - this.fpsAvg) * 0.05;
    this.frame = this.input.poll(dt);
    for (const a of this.frame.pressed) this.latched.add(a);
    this.arena.update(this.t);
    this.ui.tick(dt);
    const w = this.world;
    if (!w) { this.renderer.render(this.scene, this.camera); return; }

    if (this.phase === 'menu') this.updateMenu(dt);
    else if (this.phase !== 'paused' && this.phase !== 'result') this.updatePlay(dt, w);
    else if (this.phase === 'result') { for (const c of this.chars.values()) c.update(c.fighter, dt * 0.5); this.effects.update(dt, w, this.trailFn); }
    // frozen on pause: just render

    this.renderer.render(this.scene, this.camera);
    this.adaptQuality(dt);
  };
  private trailFn = (f: Fighter, tip: THREE.Vector3, base: THREE.Vector3) => this.chars.get(f.id)?.weaponPoints(f, tip, base) ?? false;

  private updateMenu(dt: number) {
    if (JSON.stringify(this.state.loadout) !== this.previewKey && (this.ui.current === 'weapons' || this.ui.current === 'armor')) this.buildPreview();
    if (this.ui.current === 'none') return;
    for (const c of this.chars.values()) c.update(c.fighter, dt);
    const a = this.t * 0.18, r = this.ui.current === 'menu' ? 9 : 5.2;
    this.camera.position.set(Math.sin(a) * r, this.ui.current === 'menu' ? 3.4 : 2.0, Math.cos(a) * r); this.camera.lookAt(0, 1.2, 0);
    this.effects.update(dt, this.world!, this.trailFn);
  }

  private updatePlay(dt: number, w: CombatWorld) {
    if (this.netRole === 'guest') return this.updateGuest(dt, w);
    const p = this.player, foe = this.enemy;
    // phase timers
    if (this.phase === 'countdown') { this.countdownT -= dt; if (this.countdownT <= 0) { this.phase = 'fight'; this.ui.banner('FIGHT'); this.bannerT = 0.9; } }
    else if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.ui.banner(''); }
    if (this.phase === 'fight') this.stats.time += dt;
    if (this.frame.pressed.has('lockon') && this.phase !== 'countdown') { this.rig.lockOn = !this.rig.lockOn; this.ui.toast(this.rig.lockOn ? 'LOCKED ON' : 'FREE CAMERA'); }
    if (foe) p.lockTarget = this.rig.lockOn ? foe.id : -1;

    // fixed-step simulation
    this.acc = Math.min(this.acc + dt, 0.25);
    let first = true;
    while (this.acc >= STEP) {
      const intents = new Map<number, Intent>(); const live = this.phase === 'fight' && !this.menuOpen;
      intents.set(p.id, live ? this.playerIntent() : (() => { const i = emptyIntent(); i.faceYaw = p.yaw; return i; })());
      if (foe) intents.set(foe.id, this.netRole === 'host' ? (this.phase === 'fight' ? this.remote.take() : Object.assign(emptyIntent(), { faceYaw: foe.yaw })) : !live ? Object.assign(emptyIntent(), { faceYaw: foe.yaw }) : this.ai ? this.ai.think(w, STEP) : this.dummyIntent(STEP));
      w.step(STEP, intents);
      for (const e of w.events) { if (this.netRole === 'host') this.netEvents.push(eventToNet(e, w)); this.onEvent(e); }
      this.acc -= STEP; if (first) { this.latched.clear(); first = false; }
    }

    // outcome
    if (this.phase === 'fight') {
      const win = w.winner();
      if (this.mode === 'practice' && foe && foe.dead) { this.respawnT += dt; if (this.respawnT > 1.6) this.respawnDummy(w); }
      else if (win !== null && !(this.mode === 'practice' && win === 0)) { this.phase = 'ending'; this.endT = 1.9; this.ui.banner(win === 0 ? 'VICTORY' : 'DEFEATED'); this.stats.won = win === 0; }
    } else if (this.phase === 'ending') { this.endT -= dt; if (this.endT <= 0) this.finish(this.stats.won); }

    if (this.netRole === 'host') this.sendSnapshot(dt, w);
    this.playVisuals(dt, w);
  }

  private playVisuals(dt: number, w: CombatWorld) {
    const p = this.player, foe = this.enemy;
    const vis = w.hitStop > 0 ? 0.05 : 1;
    for (const c of this.chars.values()) c.update(c.fighter, dt * vis);
    this.effects.update(dt, w, this.trailFn);
    this.rig.update(dt, p, foe && !foe.dead ? foe : null, this.frame.lookDX, this.frame.lookDY);
    // HUD
    this.ui.setHud(p, foe, this.enemyLabel, dt, this.fpsAvg, this.state.settings.showFps, p.specialCd);
    if (foe && this.rig.lockOn && !foe.dead && this.phase !== 'paused') {
      this.vec.set(foe.pos.x, foe.pos.y + 1.0, foe.pos.z).project(this.camera);
      const on = this.vec.z < 1 && Math.abs(this.vec.x) < 1.2 && Math.abs(this.vec.y) < 1.2;
      this.ui.setMarker((this.vec.x * 0.5 + 0.5) * this.host.clientWidth, (-this.vec.y * 0.5 + 0.5) * this.host.clientHeight, on);
    } else this.ui.setMarker(0, 0, false);
  }

  private respawnDummy(w: CombatWorld) {
    const old = this.enemy!; this.chars.get(old.id)?.dispose(); this.chars.delete(old.id); w.fighters = w.fighters.filter(f => f !== old);
    const nf = w.add('Training Dummy', 1, { ...defaultLoadout(), main: 'longsword', secondary: 'spear' }, 1); this.enemy = nf; this.addChar(nf, 0x8a2230); this.respawnT = 0; this.ui.resetGhost();
  }

  // ================================================================== multiplayer
  private restart() {
    if (this.netRole === 'host') { if (this.guestLoadout) this.startNetHost(); return; }
    if (this.netRole === 'guest') { this.net?.send({ t: 'rematch', l: this.state.loadout }); this.ui.toast('Waiting for host…'); return; }
    this.startMatch(this.mode);
  }
  private dropNet() { const n = this.net; this.net = null; this.netRole = null; this.guestLoadout = null; n?.close(); }
  private async openNet(url: string): Promise<NetClient | null> {
    if (this.net) this.dropNet();
    saveServerUrl(url); const n = new NetClient(); this.net = n;
    n.onClose = r => { if (this.net === n) { this.dropNet(); if (this.phase !== 'menu') this.toMenu(); this.ui.setNetStatus(r); } };
    n.onPeerLeft = () => { if (this.net !== n) return; const inMatch = this.phase !== 'menu'; if (n.role === 'host' && !inMatch) { this.ui.setNetStatus(`Room ${n.code} — opponent left, waiting…`); return; } this.dropNet(); this.toMenu(); this.ui.show('multi'); this.ui.setNetStatus('Opponent left the match'); };
    n.onMessage = m => this.onNetMessage(m);
    this.ui.setNetStatus('Connecting…');
    try { await n.connect(url); } catch (e) { this.dropNet(); this.ui.setNetStatus((e as Error).message); return null; }
    return n;
  }
  private async hostGame(url: string) {
    const n = await this.openNet(url); if (!n) return;
    n.onStatus = st => { if (st === 'created') this.ui.setNetStatus(`Room code  ${n.code}  — share it; waiting for an opponent…`, n.code); else if (st.startsWith('error:')) this.ui.setNetStatus(st.slice(6)); };
    n.onPeer = () => { this.ui.setNetStatus('Opponent connected — waiting for their loadout…'); };
    n.create();
  }
  private async joinGame(url: string, code: string) {
    if (!/^[A-Za-z2-9]{4}$/.test(code.trim())) { this.ui.setNetStatus('Enter the 4-character room code'); return; }
    const n = await this.openNet(url); if (!n) return;
    n.onStatus = st => { if (st.startsWith('error:')) { this.ui.setNetStatus(st.slice(6)); this.dropNet(); } };
    n.onJoined = () => { this.ui.setNetStatus('Joined — waiting for the host to start…'); this.netRole = 'guest'; n.send({ t: 'hello', l: this.state.loadout }); };
    n.join(code);
  }
  private startNetHost() {
    if (!this.net || !this.guestLoadout) return;
    this.netRole = 'host'; this.ui.netMode = true;
    const hl: Loadout = JSON.parse(JSON.stringify(this.state.loadout));
    this.net.send({ t: 'start', hl, gl: this.guestLoadout });
    this.startMatch('duel', { role: 'host', hostLoadout: hl, guestLoadout: this.guestLoadout });
  }
  private onNetMessage(m: any) {
    if (this.netRole !== 'guest' && this.net?.role === 'host') {
      // ---- host side
      if (m.t === 'hello') { this.guestLoadout = sanitizeLoadout(m.l); this.netRole = 'host'; this.startNetHost(); }
      else if (m.t === 'rematch') { this.guestLoadout = sanitizeLoadout(m.l); this.startNetHost(); }
      else if (m.t === 'in') this.remote.ingest(m);
      return;
    }
    if (this.net?.role === 'host') { if (m.t === 'in') this.remote.ingest(m); else if (m.t === 'rematch') { this.guestLoadout = sanitizeLoadout(m.l); this.startNetHost(); } return; }
    // ---- guest side
    if (m.t === 'start') {
      this.netRole = 'guest'; this.ui.netMode = true;
      this.startMatch('duel', { role: 'guest', hostLoadout: sanitizeLoadout(m.hl), guestLoadout: sanitizeLoadout(m.gl) });
    } else if (m.t === 'snap' && this.world && this.netRole === 'guest') this.applyGuestSnapshot(m);
    else if (m.t === 'result' && this.netRole === 'guest' && this.phase !== 'result') { this.stats.time = typeof m.tm === 'number' ? m.tm : this.stats.time; this.finish(!m.hostWon); }
  }
  private sendSnapshot(dt: number, w: CombatWorld) {
    this.snapAcc += dt; if (this.snapAcc < 1 / 30 || !this.net || w.fighters.length < 2) return; this.snapAcc = 0;
    this.net.send({ t: 'snap', f: [snapFighter(w.fighters[0]), snapFighter(w.fighters[1])], pr: w.projectiles.map(snapProjectile), ev: this.netEvents.splice(0), hs: Math.round(w.hitStop * 1000) / 1000, ph: this.phase, win: w.winner(), tm: Math.round(this.stats.time * 10) / 10 });
  }
  private applyGuestSnapshot(m: any) {
    const w = this.world!; if (w.fighters.length < 2 || !Array.isArray(m.f) || m.f.length < 2) return;
    for (let i = 0; i < 2; i++) this.targets[i] = applyFighter(w.fighters[i], m.f[i], this.firstSnap);
    this.firstSnap = false; this.snapAt = performance.now();
    applyProjectiles(w, Array.isArray(m.pr) ? m.pr : []); w.hitStop = typeof m.hs === 'number' ? m.hs : 0;
    if (Array.isArray(m.ev)) for (const e of m.ev) { const ev = eventFromNet(e, w); if (ev) this.onEvent(ev); }
    this.stats.time = typeof m.tm === 'number' ? m.tm : this.stats.time;
    const ph = m.ph as Phase;
    if (ph !== this.phase && (ph === 'countdown' || ph === 'fight' || ph === 'ending')) {
      this.phase = ph;
      if (ph === 'fight') { this.ui.banner('FIGHT'); this.bannerT = 0.9; } else if (ph === 'countdown') this.ui.banner('READY');
      else if (ph === 'ending') this.ui.banner(m.win === 1 ? 'VICTORY' : 'DEFEATED');
    }
  }
  /** Guest frame: no simulation. Send intents, ease fighters toward the latest snapshot, render. */
  private updateGuest(dt: number, w: CombatWorld) {
    const p = this.player, foe = this.enemy;
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.ui.banner(''); }
    if (this.frame.pressed.has('lockon') && this.phase !== 'countdown') { this.rig.lockOn = !this.rig.lockOn; this.ui.toast(this.rig.lockOn ? 'LOCKED ON' : 'FREE CAMERA'); }
    const live = this.phase === 'fight' && !this.menuOpen;
    const it = live ? this.playerIntent() : Object.assign(emptyIntent(), { faceYaw: p.yaw });
    this.net?.send(packIntent(it)); this.latched.clear();
    const age = Math.min(0.12, (performance.now() - this.snapAt) / 1000), k = 1 - Math.exp(-16 * dt);
    w.fighters.forEach((f, i) => {
      const t = this.targets[i]; if (!t) return;
      f.pos.x += (t.x + t.vx * age - f.pos.x) * k; f.pos.z += (t.z + t.vz * age - f.pos.z) * k; f.yaw = lerpAngle(f.yaw, t.yaw, k);
    });
    if (foe) p.lockTarget = this.rig.lockOn ? foe.id : -1;
    this.playVisuals(dt, w);
  }

  /** Drop quality one notch when the average frame time stays high (Chromebook friendliness). */
  private frameMs = 0; private frameN = 0;
  private adaptQuality(dt: number) {
    if (this.phase !== 'fight' || !this.state.settings.autoQuality) { this.frameMs = 0; this.frameN = 0; return; }
    this.frameMs += dt * 1000; this.frameN++; this.slowT += dt;
    if (this.slowT < 3) return;
    const avg = this.frameMs / Math.max(1, this.frameN); this.slowT = 0; this.frameMs = 0; this.frameN = 0;
    const q = this.state.settings.quality;
    if (avg > 26 && q !== 'low') { const nq: Quality = q === 'high' ? 'balanced' : 'low'; this.state.settings.quality = nq; saveState(this.state); this.applyQuality(nq); this.ui.toast('Quality lowered for performance'); }
  }
}
