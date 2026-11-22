/** Thin WebSocket wrapper for the relay server (server/server.mjs). */
export function defaultServerUrl(): string {
  try {
    const saved = localStorage.getItem('aetherfall.server'); if (saved) return saved;
    if (typeof location !== 'undefined' && location.hostname) {
      if (location.port === '5173' || location.port === '4173') return `ws://${location.hostname}:8080/ws`;   // vite dev / preview
      return `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;
    }
  } catch { /* no storage */ }
  return 'ws://localhost:8080/ws';
}
export function saveServerUrl(u: string) { try { localStorage.setItem('aetherfall.server', u); } catch { /* ignore */ } }

export class NetClient {
  private ws: WebSocket | null = null; role: 'host' | 'guest' | null = null; code = '';
  onMessage: (m: any) => void = () => {}; onStatus: (s: string) => void = () => {}; onClose: (reason: string) => void = () => {};
  onPeer: () => void = () => {}; onJoined: () => void = () => {}; onPeerLeft: () => void = () => {};
  get open() { return !!this.ws && this.ws.readyState === 1; }

  connect(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      let ws: WebSocket; try { ws = new WebSocket(url); } catch (e) { reject(new Error('Bad server address')); return; }
      this.ws = ws; const timer = setTimeout(() => { try { ws.close(); } catch { /* ignore */ } reject(new Error('Connection timed out')); }, 8000);
      ws.onopen = () => { clearTimeout(timer); resolve(); };
      ws.onerror = () => { clearTimeout(timer); reject(new Error('Could not reach server')); };
      ws.onclose = () => { this.ws = null; this.onClose('Disconnected from server'); };
      ws.onmessage = ev => {
        let m: any; try { m = JSON.parse(String(ev.data)); } catch { return; }
        if (!m || typeof m.t !== 'string') return;
        switch (m.t) {
          case 'created': this.code = String(m.code); this.role = 'host'; this.onStatus('created'); break;
          case 'joined': this.code = String(m.code); this.role = 'guest'; this.onJoined(); break;
          case 'peer': this.onPeer(); break;
          case 'peer_left': this.onPeerLeft(); break;
          case 'error': this.onStatus('error:' + String(m.msg)); break;
          default: this.onMessage(m);
        }
      };
    });
  }
  create() { this.role = null; this.send({ t: 'create' }); }
  join(code: string) { this.send({ t: 'join', code: code.trim().toUpperCase() }); }
  send(o: unknown) { if (this.open) this.ws!.send(JSON.stringify(o)); }
  close() { const w = this.ws; this.ws = null; this.onClose = () => {}; try { w?.close(); } catch { /* ignore */ } this.role = null; this.code = ''; }
}
