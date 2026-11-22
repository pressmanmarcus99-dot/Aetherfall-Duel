# Aetherfall Duel

A third-person 3D fantasy duelling game: TypeScript + Three.js + Vite. Procedural art (no asset downloads), synthesized audio, built to stay light on Chromebook-class GPUs.

```
npm install
npm run dev        # play at the printed localhost URL (click the arena to capture the mouse)
npm run build      # tsc + vite production build
npm run test:sim   # headless AI-vs-AI simulation checks (no browser, no WebGL)
npm run test:net   # starts the relay server + two clients and tests the multiplayer protocol end to end
npm start          # build, then serve the game AND the multiplayer relay on http://localhost:8080
```

## Status — read this first
| Part | Verified? |
|---|---|
| Simulation (`combat`, `movement`, `ai`, `weapons`, `armor`, `arenas/spec`) | Type-checked (`tsc -p tsconfig.sim.json`) and exercised by `npm run test:sim`: 18 weapons fight each other for 60 s with no NaN/out-of-arena positions, parries/blocks/dodges/hits occur, one swing = one hit, Master AI beats Novice AI 12/12. |
| Presentation (`characters`, `camera`, `effects`, `audio`, `UI`, `game`, `arenas/colosseum`) | **Written but never run.** It was type-checked only against a permissive stand-in for `three` (`tsconfig.ui.json`), because Three.js/Vite could not be installed where this was authored. Expect visual and runtime bugs on first launch (rig proportions, animation poses, camera feel, tuning). Console errors on first run are likely; please report them. |
| Production build (`vite build`) | **Not run.** |
| Multiplayer relay + netcode (`server/`, `src/net/`) | `npm run test:net` runs the real server with two real WebSocket clients: room create/join/full/unknown-code, guest intents driving the host sim, snapshots/events/armor replicated, disconnect notice, hostile/malformed input. **The in-browser multiplayer UI path (lobby screen, pointer-lock after a network-triggered start) has not been run in a browser.** |
| Rapier | **Not used.** The dependency is kept in `package.json`, but movement and hit detection are analytic (kinematic capsule movement; swept weapon-segment vs. body-capsule tests). |

## Architecture
Simulation is renderer-free and deterministic (seeded RNG, fixed 60 Hz step). Everything that moves a fighter is an `Intent`, so keyboard, AI, a future phone pad, or a network peer are interchangeable. The world emits `CombatEvent`s; VFX, audio, camera shake and HUD toasts are driven only by those.

```
src/core        math, seeded RNG
src/weapons     WeaponDef/MoveDef data (18 weapons + kite shield), procedural models
src/armor       4-slot armor data, resistances, durability, weight
src/combat      Fighter state, CombatWorld (attacks, swept hits, block/parry, stagger, statuses, projectiles), swing trajectories
src/movement    kinematic 3D controller (strafe, sprint, jump, dodge, collisions)
src/ai          AIController: novice / warrior / veteran / master (behaviour differences, not stat boosts)
src/input       abstract Actions, InputSource interface, keyboard+mouse source, rebinding + persistence
src/camera      third-person orbit, lock-on, collision, shake
src/characters  procedural armored humanoid rig, IK arms, procedural animator, ClipAnimator hook for GLB
src/arenas      spec.ts (collision) + colosseum.ts (visuals)
src/effects     pooled particles, weapon trails, rings, projectile meshes
src/audio       WebAudio synth voices mapped from combat events
src/UI          menu, weapon select, armor select, settings/rebinding, HUD, pause, result
src/game        game loop, match flow, persistence, adaptive quality
src/assets      GLB registry (see below)
```
The weapon swing trajectory (`combat/swing.ts`) is shared by hit detection and the animator, so what you see is what collides.

## Controls (rebindable in Settings)
WASD move · Shift sprint · Space jump · LMB light (forward+LMB lunges, back+LMB sweeps) · E heavy · RMB/Q block (tap just before impact to parry, then counter) · C/Alt dodge (no direction = backstep) · V special · Tab/Z/MMB lock-on · 1/2 weapon slots, X swap · Arrow keys camera · Esc pause.

## Replacing placeholders with real models (e.g. Tripo)
`src/assets/registry.ts`: `registerWeaponGLB('greatsword', '/assets/weapons/greatsword.glb', { length: 1.7, grip2: -0.25 })`, called before `Game.start()`. Convention: origin at grip, blade along +Y, 1 unit = 1 m. `ClipAnimator` in `characters/animator.ts` maps sim state to named clips for a rigged character GLB (untested).

## Known gaps
No gamepad/touch source yet (the `InputSource` interface is ready for it), no client-side prediction or matchmaking beyond room codes, no 3D weapon preview in the select screen (stat bars; the menu background shows your loadout live), one arena.

## Multiplayer
1v1, host-authoritative. Main menu -> Multiplayer. One player clicks **Host a Match** and shares the 4-letter room code; the other enters it and clicks **Join Match**. Each side uses its own saved loadout. The host runs the only simulation (60 Hz); the guest sends inputs and renders 30 Hz snapshots with smoothing, so the guest feels the round-trip latency (no client-side prediction yet). Esc opens the menu without pausing the match.

The relay (`server/server.mjs`, no dependencies) only pairs two clients and forwards messages. Ways to play:
- **Same machine / LAN:** `npm start`, open `http://<host-ip>:8080` on both machines.
- **Over the internet:** run `npm start` on any Node host that supports WebSockets (Render, Fly.io, Railway, a VPS) and open its URL on both machines (the page connects to `/ws` on the same origin automatically), or use a tunnel (e.g. `cloudflared tunnel --url http://localhost:8080`).
- **Dev server:** with `npm run dev` (port 5173) also run `npm run host`; the client defaults to `ws://<hostname>:8080/ws`. The server address can be edited in the Multiplayer screen.

## Assets
Everything ships procedural (no downloads possible where this was built). To use real art, drop CC0 packs (Quaternius, Kenney, Poly Pizza) into `public/assets/` and register them in `src/main.ts` before `game.start()`, e.g. `registerWeaponGLB('longsword', '/assets/weapons/longsword.glb', { length: 1.1 })`. Weapons you don't register stay procedural.
