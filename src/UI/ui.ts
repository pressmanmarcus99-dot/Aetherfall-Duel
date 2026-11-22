import { ARMOR_SLOTS, ArmorSlot, armorFor, getArmor, totalWeight, makeArmor } from '../armor/armor';
import { WEAPON_ORDER, getWeapon, canUseShield } from '../weapons/definitions';
import type { WeaponDef } from '../weapons/types';
import type { Difficulty } from '../ai/ai';
import { ELEMENT_COLOR, ELEMENT_LABEL, hex } from '../effects/palette';
import { ACTION_LABELS, ACTION_ORDER, Action, prettyCode } from '../input/actions';
import { KeyboardMouseInput, saveInputSettings } from '../input/input';
import type { AudioSystem } from '../audio/audio';
import { AppState, Quality, saveState } from '../game/state';
import type { Fighter } from '../combat/fighter';
import { defaultServerUrl } from '../net/client';

export interface UIHooks { hostGame(url: string): void; joinGame(url: string, code: string): void; startMatch(mode: 'duel' | 'practice'): void; resume(): void; restart(): void; toMenu(): void; settingsChanged(): void }
export interface ResultStats { won: boolean; time: number; damage: number; hits: number; parries: number; dodges: number; blocks: number; mode: string }
type Screen = 'none' | 'multi' | 'menu' | 'weapons' | 'armor' | 'settings' | 'pause' | 'result' | 'controls';

const FAMILY: Record<string, string> = { greatsword: 'sword', longsword: 'sword', rapier: 'rapier', dagger: 'dagger', axe: 'axe', spear: 'spear', polearm: 'polearm', hammer: 'hammer', dualblades: 'dual', bow: 'bow', flamesword: 'sword', icelance: 'spear', lightning: 'fist', windblades: 'dual', earthmaul: 'hammer', lightblade: 'sword', cyberblade: 'sword', energyshield: 'shield', kiteshield: 'shield' };
const ICON: Record<string, string> = {
  sword: '<path d="M12 2l2 12h-4zM8 14h8v2H8zM11 16h2v6h-2z"/>', rapier: '<path d="M12 1l1 15h-2zM7 16h10v1.5H7zM11 17.5h2v5h-2z"/>', dagger: '<path d="M12 6l2 8h-4zM9 14h6v1.6H9zM11 15.6h2v5h-2z"/>',
  axe: '<path d="M11 2h2v20h-2zM13 3c6 0 8 3 8 6s-2 5-8 5z"/>', spear: '<path d="M12 1l3 6h-6zM11 7h2v16h-2z"/>', polearm: '<path d="M11 4h2v19h-2zM13 4c5 0 7 3 7 5s-2 4-7 4zM12 0l2 4h-4z"/>',
  hammer: '<path d="M11 8h2v15h-2zM5 3h14v6H5z"/>', dual: '<path d="M7 3l2 11H5zM17 3l2 11h-4zM4 14h6v1.6H4zM14 14h6v1.6h-6zM6.2 15.6h1.6V21H6.2zM16.2 15.6h1.6V21h-1.6z"/>',
  bow: '<path d="M7 2c9 3 9 17 0 20l-1-1.5c7-3 7-14 0-17zM6 12h13M17 10l3 2-3 2"/>', fist: '<path d="M6 10h10v8H6zM16 12h3v4h-3zM7 6h2v4H7zM10 5h2v5h-2zM13 6h2v4h-2z"/>', shield: '<path d="M12 2l8 3v7c0 5-4 9-8 10-4-1-8-5-8-10V5z"/>',
};
const icon = (id: string, color = 'currentColor') => `<svg viewBox="0 0 24 24" width="34" height="34" fill="${color}" stroke="${color}" stroke-width="0.4">${ICON[FAMILY[id] ?? 'sword']}</svg>`;

function weaponStats(w: WeaponDef) {
  const lt = w.light.reduce((s, m) => s + m.windup + m.active + m.recovery, 0) / w.light.length;
  const ld = w.light.reduce((s, m) => s + m.damage * Math.max(1, m.multi), 0) / w.light.length;
  return { damage: Math.min(1, ld / 24), speed: Math.min(1, (1 / lt) / 2.4), reach: Math.min(1, w.light[0].reach / 2.2), defense: w.defense.blockReduction, mobility: Math.min(1, (w.moveMult - 0.8) / 0.35) };
}
const bar = (label: string, v: number, color = '#c9a24a') => `<div class="stat"><span>${label}</span><i><b style="width:${Math.round(Math.max(0.04, Math.min(1, v)) * 100)}%;background:${color}"></b></i></div>`;

export class UI {
  private root: HTMLElement; private screen: Screen = 'none'; private hud: HTMLElement; private overlay: HTMLElement;
  private slotTab: 'main' | 'secondary' = 'main'; private prev: Screen = 'menu';
  private el: Record<string, HTMLElement> = {}; private toastT = 0; private markerEl!: HTMLElement;
  constructor(root: HTMLElement, private state: AppState, private input: KeyboardMouseInput, private audio: AudioSystem, private hooks: UIHooks) {
    this.root = root;
    this.overlay = document.createElement('div'); this.overlay.className = 'overlay'; root.appendChild(this.overlay);
    this.hud = document.createElement('div'); this.hud.className = 'hud hidden'; root.appendChild(this.hud); this.buildHud();
    this.overlay.addEventListener('click', e => this.onClick(e)); this.overlay.addEventListener('input', e => this.onInput(e)); this.overlay.addEventListener('change', e => this.onInput(e));
    this.overlay.addEventListener('mouseover', e => { const t = (e.target as HTMLElement).closest('button,.card'); if (t && !t.classList.contains('hov')) { audioHover(this.audio); } });
  }
  get current() { return this.screen; }
  private persist() { saveState(this.state); }

  // ------------------------------------------------------------------ screens
  netMode = false; private netMsg = ''; private joinCode = ''; private roomCode = '';
  private lastResult: ResultStats | null = null;
  show(s: Screen, extra?: ResultStats) {
    if (extra) this.lastResult = extra;
    if (s !== 'settings' && s !== 'weapons' && s !== 'armor' && s !== 'controls') this.prev = s === 'none' ? 'menu' : s;
    this.screen = s; this.overlay.className = 'overlay' + (s === 'none' ? ' hidden' : s === 'pause' || s === 'result' ? ' dim' : '');
    this.hud.classList.toggle('hidden', !(s === 'none' || s === 'pause' || s === 'result'));
    switch (s) {
      case 'none': this.overlay.innerHTML = ''; break;
      case 'menu': this.overlay.innerHTML = this.menuHtml(); break;
      case 'multi': this.overlay.innerHTML = this.multiHtml(); break;
      case 'weapons': this.overlay.innerHTML = this.weaponsHtml(); break;
      case 'armor': this.overlay.innerHTML = this.armorHtml(); break;
      case 'settings': this.overlay.innerHTML = this.settingsHtml(); break;
      case 'controls': this.overlay.innerHTML = this.settingsHtml(); break;
      case 'pause': this.overlay.innerHTML = this.pauseHtml(); break;
      case 'result': this.overlay.innerHTML = this.resultHtml(extra ?? this.lastResult!); break;
    }
  }
  private menuHtml() {
    return `<div class="menu"><div class="title"><small>THE SUNKEN COLOSSEUM</small><h1>AETHERFALL<br><span>DUEL</span></h1></div>
      <div class="menu-col">
        <button class="big" data-act="duel">Play Duel</button>
        <button class="big" data-act="practice">Practice</button>
        <button class="big" data-act="multi">Multiplayer</button>
        <button data-act="weapons">Weapon Select</button>
        <button data-act="armor">Armor Select</button>
        <button data-act="settings">Settings</button>
        <div class="diff"><label>Opponent</label>${this.diffSelect()}</div>
        <p class="tiny">Click the arena to capture the mouse. Esc pauses. WASD move · LMB light · E heavy · RMB block (tap just before a hit to parry) · C dodge · V special · Tab lock-on · 1/2/X weapons</p>
      </div></div>`;
  }
  private multiHtml() {
    return `<div class="panel"><h2>Multiplayer</h2><p class="tiny">1v1 online duel. One player hosts and shares the 4-letter code; the other joins. Uses your current loadout.</p>
      <label class="row"><span>Server</span><input type="text" data-set="serverUrl" value="${defaultServerUrl()}" style="width:260px"></label>
      <div class="menu-col"><button class="big" data-act="host">Host a Match</button>
      <div class="row"><input type="text" id="join-code" data-set="joinCode" maxlength="4" placeholder="CODE" value="${this.joinCode}" style="width:90px;text-transform:uppercase;text-align:center;letter-spacing:.3em"><button data-act="join">Join Match</button></div>
      <div id="net-status" class="tiny" style="min-height:2.4em;color:var(--gold)">${this.netMsg}</div>
      <button data-act="cancelnet">Back</button></div></div>`;
  }
  setNetStatus(msg: string, code = '') { this.netMsg = msg; if (code) this.roomCode = code; const el = this.overlay.querySelector('#net-status'); if (el) el.textContent = msg; }
  private diffSelect() {
    const d: Difficulty[] = ['novice', 'warrior', 'veteran', 'master'];
    return `<select data-set="difficulty">${d.map(x => `<option value="${x}" ${this.state.settings.difficulty === x ? 'selected' : ''}>${x[0].toUpperCase() + x.slice(1)}</option>`).join('')}</select>`;
  }
  private weaponsHtml() {
    const lo = this.state.loadout, cur = getWeapon(this.slotTab === 'main' ? lo.main : lo.secondary), st = weaponStats(cur);
    const cards = WEAPON_ORDER.map(id => {
      const w = getWeapon(id), sel = (this.slotTab === 'main' ? lo.main : lo.secondary) === id;
      return `<div class="card ${sel ? 'sel' : ''}" data-weapon="${id}" style="--el:${hex(ELEMENT_COLOR[w.element])}">${icon(id, hex(ELEMENT_COLOR[w.element]))}<b>${w.name}</b><em>${ELEMENT_LABEL[w.element]}</em></div>`;
    }).join('');
    const canShield = canUseShield(lo.main);
    const moves = [...cur.light, cur.heavy, cur.special].map(m => `<li><b>${m.name}</b> <em>${m.kind}</em></li>`).join('');
    return `<div class="panel wide"><header><h2>Weapon Select</h2><div class="tabs"><button class="${this.slotTab === 'main' ? 'on' : ''}" data-tab="main">Main Hand</button><button class="${this.slotTab === 'secondary' ? 'on' : ''}" data-tab="secondary">Secondary</button></div></header>
      <div class="split"><div class="grid">${cards}</div>
      <aside class="detail"><h3 style="color:${hex(ELEMENT_COLOR[cur.element])}">${cur.name}</h3><p>${cur.blurb}</p>
        ${bar('Damage', st.damage)}${bar('Speed', st.speed)}${bar('Reach', st.reach)}${bar('Defense', st.defense)}${bar('Mobility', st.mobility)}
        <ul class="moves">${moves}</ul>
        <div class="shield"><label>Off-hand shield ${canShield ? '' : '<em>(one-handed main weapon only)</em>'}</label>
          <select data-set="shield" ${canShield ? '' : 'disabled'}><option value="">None</option><option value="kiteshield" ${lo.shield === 'kiteshield' ? 'selected' : ''}>Kite Shield</option><option value="energyshield" ${lo.shield === 'energyshield' ? 'selected' : ''}>Energy Shield</option></select></div>
        <p class="tiny">Switch in battle with 1 / 2 / X.</p></aside></div>
      <footer><button data-act="back">Done</button></footer></div>`;
  }
  private armorHtml() {
    const arm = makeArmor(this.state.loadout.armor), wt = totalWeight(arm);
    const rows = ARMOR_SLOTS.map(slot => `<div class="slot"><h4>${slot}</h4><div class="tiers">${armorFor(slot).map(a => {
      const sel = this.state.loadout.armor[slot] === a.id;
      return `<div class="card armor ${sel ? 'sel' : ''}" data-armor="${slot}:${a.id}"><b>${a.name}</b><em>${a.tier}</em>
        ${bar('Slash', a.resist.slash ?? 0, '#9fb0c8')}${bar('Pierce', a.resist.pierce ?? 0, '#9fb0c8')}${bar('Blunt', a.resist.blunt ?? 0, '#9fb0c8')}${bar('Magic', (a.resist.fire ?? 0) * 2, '#b78cff')}
        <small>Weight ${a.weight} · Durability ${a.durability} · Poise ${a.poise}</small>${a.trait ? `<small class="trait">${a.trait}</small>` : ''}</div>`;
    }).join('')}</div></div>`).join('');
    const spd = Math.round((1 - Math.min(0.22, wt * 0.0045)) * 100);
    return `<div class="panel wide"><header><h2>Armor Select</h2><div class="sum">Total weight <b>${wt}</b> · Movement ${spd}% · Stamina regen ${Math.round(Math.max(14, 28 - wt * 0.35))}/s</div></header>
      <div class="armor-grid">${rows}</div><footer><button data-act="back">Done</button></footer></div>`;
  }
  private settingsHtml() {
    const s = this.state.settings, i = this.input.settings;
    const slider = (label: string, key: string, v: number, min: number, max: number, step = 0.05) => `<label class="row"><span>${label}</span><input type="range" data-set="${key}" min="${min}" max="${max}" step="${step}" value="${v}"></label>`;
    const check = (label: string, key: string, v: boolean) => `<label class="row"><span>${label}</span><input type="checkbox" data-set="${key}" ${v ? 'checked' : ''}></label>`;
    const binds = ACTION_ORDER.map(a => `<div class="bind"><span>${ACTION_LABELS[a]}</span>${[0, 1].map(k => `<button data-bind="${a}:${k}">${i.bindings[a][k] ? prettyCode(i.bindings[a][k]) : '—'}</button>`).join('')}</div>`).join('');
    return `<div class="panel wide"><header><h2>Settings</h2></header><div class="split cols">
      <div><h3>Game</h3>
        <label class="row"><span>Quality</span><select data-set="quality">${(['low', 'balanced', 'high'] as Quality[]).map(q => `<option value="${q}" ${s.quality === q ? 'selected' : ''}>${q}</option>`).join('')}</select></label>
        ${check('Auto-lower quality if slow', 'autoQuality', s.autoQuality)}${check('Auto lock-on at start', 'autoLock', s.autoLock)}${check('Show FPS', 'showFps', s.showFps)}
        <label class="row"><span>Opponent</span>${this.diffSelect()}</label>
        <h3>Audio</h3>${slider('Master', 'master', s.master, 0, 1)}${slider('Effects', 'sfx', s.sfx, 0, 1)}${slider('Ambience', 'music', s.music, 0, 1)}
        <h3>Camera</h3>${slider('Mouse sensitivity', 'sensitivity', i.sensitivity, 0.2, 3)}${slider('Screen shake', 'shake', s.shake, 0, 1)}${check('Invert Y', 'invertY', i.invertY)}</div>
      <div><h3>Controls <small>(click, then press a key or mouse button)</small></h3><div class="binds">${binds}</div><button data-act="resetbinds">Reset controls</button></div></div>
      <footer><button data-act="back">Done</button></footer></div>`;
  }
  private pauseHtml() {
    return `<div class="panel"><h2>Paused</h2><div class="menu-col"><button class="big" data-act="resume">Resume</button>${this.netMode ? '' : '<button data-act="restart">Restart Match</button>'}<button data-act="weapons">Loadout (applies on restart)</button><button data-act="armor">Armor (applies on restart)</button><button data-act="settings">Settings</button><button data-act="menu">Quit to Menu</button></div></div>`;
  }
  private resultHtml(r: ResultStats) {
    const m = Math.floor(r.time / 60), s = Math.floor(r.time % 60).toString().padStart(2, '0');
    return `<div class="panel result ${r.won ? 'win' : 'lose'}"><h2>${r.won ? 'VICTORY' : 'DEFEATED'}</h2>
      <div class="stats"><div><b>${m}:${s}</b><span>Time</span></div><div><b>${Math.round(r.damage)}</b><span>Damage</span></div><div><b>${r.hits}</b><span>Hits</span></div><div><b>${r.parries}</b><span>Parries</span></div><div><b>${r.blocks}</b><span>Blocks</span></div><div><b>${r.dodges}</b><span>Dodges</span></div></div>
      <div class="menu-col"><button class="big" data-act="restart">${this.netMode ? 'Rematch (host starts)' : 'Rematch'}</button><button data-act="weapons">Change Loadout</button><button data-act="menu">Main Menu</button></div></div>`;
  }

  // ------------------------------------------------------------------ events
  private onClick(e: Event) {
    const t = e.target as HTMLElement;
    const act = t.closest('[data-act]') as HTMLElement | null, wp = t.closest('[data-weapon]') as HTMLElement | null, tab = t.closest('[data-tab]') as HTMLElement | null,
      ar = t.closest('[data-armor]') as HTMLElement | null, bind = t.closest('[data-bind]') as HTMLElement | null;
    if (bind) return this.rebind(bind);
    if (wp) { const id = wp.dataset.weapon!; if (this.slotTab === 'main') this.state.loadout.main = id; else this.state.loadout.secondary = id; if (!canUseShield(this.state.loadout.main)) this.state.loadout.shield = null; this.persist(); this.audio.ui('confirm'); this.show('weapons'); return; }
    if (tab) { this.slotTab = tab.dataset.tab as 'main' | 'secondary'; this.audio.ui('click'); this.show('weapons'); return; }
    if (ar) { const [slot, id] = ar.dataset.armor!.split(':'); this.state.loadout.armor[slot as ArmorSlot] = id; getArmor(id); this.persist(); this.audio.ui('confirm'); this.show('armor'); return; }
    if (!act) return;
    this.audio.ui('click');
    switch (act.dataset.act) {
      case 'multi': this.show('multi'); break;
      case 'host': this.hooks.hostGame(this.serverUrlValue()); break;
      case 'join': this.hooks.joinGame(this.serverUrlValue(), this.joinCode); break;
      case 'cancelnet': this.netMsg = ''; this.hooks.toMenu(); break;
      case 'duel': this.hooks.startMatch('duel'); break; case 'practice': this.hooks.startMatch('practice'); break;
      case 'weapons': this.show('weapons'); break; case 'armor': this.show('armor'); break; case 'settings': this.show('settings'); break;
      case 'back': this.show(this.prev === 'none' ? 'menu' : this.prev); break;
      case 'resume': this.hooks.resume(); break; case 'restart': this.hooks.restart(); break; case 'menu': this.hooks.toMenu(); break;
      case 'resetbinds': this.input.resetBindings(); saveInputSettings(this.input.settings); this.show('settings'); break;
    }
  }
  private serverUrlValue(): string { const i = this.overlay.querySelector('input[data-set=serverUrl]') as HTMLInputElement | null; return (i?.value || defaultServerUrl()).trim(); }
  private rebind(btn: HTMLElement) {
    const [a, k] = btn.dataset.bind!.split(':'); const idx = Number(k);
    btn.textContent = 'Press…'; btn.classList.add('listening');
    this.input.listenForBinding(code => {
      const b = this.input.settings.bindings;
      if (code !== 'Escape') {
        for (const act of ACTION_ORDER) b[act] = b[act].filter(c => c !== code);       // one action per key
        const list = b[a as Action]; list[idx] = code; b[a as Action] = list.filter(Boolean);
      }
      this.input.rebuild(); saveInputSettings(this.input.settings); this.show('settings');
    });
  }
  private onInput(e: Event) {
    const t = e.target as HTMLInputElement | HTMLSelectElement; const key = t.dataset?.set; if (!key) return;
    if (key === 'serverUrl') return;
    if (key === 'joinCode') { this.joinCode = t.value.toUpperCase(); return; }
    const s = this.state.settings as any, i = this.input.settings as any, v = t instanceof HTMLInputElement && t.type === 'checkbox' ? t.checked : t instanceof HTMLInputElement && t.type === 'range' ? Number(t.value) : t.value;
    if (key === 'sensitivity' || key === 'invertY') { i[key] = v; saveInputSettings(this.input.settings); }
    else if (key === 'shield') { this.state.loadout.shield = (v as string) || null; this.persist(); }
    else { s[key] = v; this.persist(); this.hooks.settingsChanged(); }
  }

  // ------------------------------------------------------------------ HUD
  private buildHud() {
    this.hud.innerHTML = `
      <div class="hud-tl"><div class="name" id="h-name">You</div><div class="bar hp"><i id="h-hp"></i><i class="ghost" id="h-hpg"></i></div><div class="bar st"><i id="h-st"></i></div><div class="pips" id="h-armor"></div></div>
      <div class="hud-top"><div class="name" id="e-name"></div><div class="bar hp enemy"><i id="e-hp"></i><i class="ghost" id="e-hpg"></i></div><div class="bar st thin"><i id="e-st"></i></div></div>
      <div class="hud-bl" id="h-weapons"></div>
      <div class="hud-br" id="h-hints"></div>
      <div class="toast" id="h-toast"></div><div class="banner" id="h-banner"></div><div class="vignette" id="h-vig"></div><div class="marker" id="h-marker"></div><div class="fps" id="h-fps"></div>
      <div class="status" id="h-status"></div>`;
    for (const id of ['h-name', 'h-hp', 'h-hpg', 'h-st', 'h-armor', 'e-name', 'e-hp', 'e-hpg', 'e-st', 'h-weapons', 'h-hints', 'h-toast', 'h-banner', 'h-vig', 'h-marker', 'h-fps', 'h-status']) this.el[id] = this.hud.querySelector('#' + id) as HTMLElement;
    this.markerEl = this.el['h-marker'];
  }
  private ghostHp = 1; private ghostEn = 1; private weaponKey = '';
  setHud(player: Fighter, enemy: Fighter | null, enemyLabel: string, dt: number, fps: number | null, showFps: boolean, specialLeft: number) {
    const e = this.el, pc = player.health / player.maxHealth;
    this.ghostHp = Math.max(pc, this.ghostHp - dt * 0.25); e['h-hp'].style.width = (pc * 100).toFixed(1) + '%'; e['h-hpg'].style.width = (this.ghostHp * 100).toFixed(1) + '%';
    e['h-st'].style.width = (player.stamina / player.maxStamina * 100).toFixed(1) + '%'; e['h-st'].classList.toggle('low', player.stamina < 20);
    e['h-armor'].innerHTML = ARMOR_SLOTS.map(s => { const a = player.armor[s]; const r = a.broken ? 0 : a.dur / a.def.durability; return `<span class="pip ${a.broken ? 'broken' : r < 0.4 ? 'worn' : ''}" title="${a.def.name}"><b style="height:${Math.round(r * 100)}%"></b><em>${s[0].toUpperCase()}</em></span>`; }).join('');
    if (enemy) {
      const ec = enemy.health / enemy.maxHealth; this.ghostEn = Math.max(ec, this.ghostEn - dt * 0.25);
      e['e-name'].textContent = enemyLabel; e['e-hp'].style.width = (ec * 100).toFixed(1) + '%'; e['e-hpg'].style.width = (this.ghostEn * 100).toFixed(1) + '%'; e['e-st'].style.width = (enemy.stamina / enemy.maxStamina * 100).toFixed(1) + '%';
    }
    const w = player.weapon, key = player.slot + player.loadout.main + player.loadout.secondary + (player.shield?.id ?? '');
    const sp = specialLeft;
    if (key !== this.weaponKey) { this.weaponKey = key; }
    const slotHtml = (k: string, id: string, on: boolean) => { const ww = getWeapon(id); return `<div class="wslot ${on ? 'on' : ''}" style="--el:${hex(ELEMENT_COLOR[ww.element])}">${icon(id, hex(ELEMENT_COLOR[ww.element]))}<span>${k}</span><em>${ww.name}</em></div>`; };
    e['h-weapons'].innerHTML = slotHtml('1', player.loadout.main, player.slot === 'main') + slotHtml('2', player.loadout.secondary, player.slot === 'secondary') +
      `<div class="special ${sp <= 0 ? 'ready' : ''}"><span>V</span><b>${w.special.name}</b><i style="width:${sp <= 0 ? 100 : Math.max(0, 100 - sp / Math.max(0.1, w.special.cooldown) * 100)}%"></i></div>`;
    const st: string[] = []; const s = player.st;
    if (s.burnT > 0) st.push('<span class="fire">Burning</span>'); if (s.chillT > 0) st.push('<span class="ice">Chilled</span>'); if (s.shockT > 0) st.push('<span class="shock">Shocked</span>'); if (s.wardT > 0) st.push('<span class="ward">Ward</span>'); if (s.hasteT > 0) st.push('<span class="haste">Haste</span>'); if (player.riposteT > 0) st.push('<span class="rip">Riposte!</span>'); if (player.counterCharge > 0) st.push(`<span class="ward">Charge ×${player.counterCharge}</span>`);
    e['h-status'].innerHTML = st.join('');
    e['h-fps'].style.display = showFps ? 'block' : 'none'; if (showFps && fps !== null) e['h-fps'].textContent = Math.round(fps) + ' fps';
  }
  setHints(html: string) { if (this.el['h-hints'].innerHTML !== html) this.el['h-hints'].innerHTML = html; }
  toast(msg: string, cls = '') { const t = this.el['h-toast']; t.textContent = msg; t.className = 'toast show ' + cls; this.toastT = 1.1; }
  tick(dt: number) { if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) this.el['h-toast'].className = 'toast'; } const v = this.el['h-vig']; const o = parseFloat(v.dataset.o || '0'); if (o > 0) { const n = Math.max(0, o - dt * 2.2); v.dataset.o = String(n); v.style.opacity = String(n); } }
  vignette(a: number) { const v = this.el['h-vig']; v.dataset.o = String(a); v.style.opacity = String(a); }
  banner(text: string) { const b = this.el['h-banner']; b.textContent = text; b.className = text ? 'banner show' : 'banner'; }
  setMarker(x: number, y: number, visible: boolean) { this.markerEl.style.display = visible ? 'block' : 'none'; if (visible) this.markerEl.style.transform = `translate(${x.toFixed(0)}px, ${y.toFixed(0)}px)`; }
  resetGhost() { this.ghostHp = 1; this.ghostEn = 1; }
}
function audioHover(a: AudioSystem) { a.ui('hover'); }
