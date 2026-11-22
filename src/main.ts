import './style.css';
import { Game } from './game/game';

const host = document.getElementById('app');
if (!host) throw new Error('#app missing');
const game = new Game(host);
game.start().catch(err => { console.error(err); host.innerHTML = '<pre style="color:#e8e0d0;padding:24px">Aetherfall Duel failed to start:\n' + String(err) + '</pre>'; });
