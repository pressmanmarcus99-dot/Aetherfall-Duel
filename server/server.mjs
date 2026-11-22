// Aetherfall Duel relay + static server. Zero dependencies (own minimal RFC 6455 implementation).
//   npm run build && npm run host      -> http://localhost:8080  (game + /ws relay)
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT || 8080);
const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.wasm': 'application/wasm' };
const MAX_MSG = 64 * 1024;

export function createServer() {
  const rooms = new Map(); // code -> { host, guest }
  const server = http.createServer((req, res) => {
    if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
    let p = decodeURIComponent((req.url || '/').split('?')[0]); if (p === '/') p = '/index.html';
    const file = path.resolve(DIST, '.' + p);
    if (!file.startsWith(DIST + path.sep) && file !== DIST) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end('Not found (did you run `npm run build`?)'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' }); res.end(data);
    });
  });
  server.on('upgrade', (req, socket) => {
    if ((req.url || '').split('?')[0] !== '/ws' || !req.headers['sec-websocket-key']) { socket.destroy(); return; }
    const accept = crypto.createHash('sha1').update(req.headers['sec-websocket-key'] + GUID).digest('base64');
    socket.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + accept + '\r\n\r\n');
    socket.setNoDelay(true); attach(socket);
  });

  function frame(op, payload) {
    const len = payload.length; let head;
    if (len < 126) head = Buffer.from([0x80 | op, len]);
    else if (len < 65536) { head = Buffer.alloc(4); head[0] = 0x80 | op; head[1] = 126; head.writeUInt16BE(len, 2); }
    else { head = Buffer.alloc(10); head[0] = 0x80 | op; head[1] = 127; head.writeBigUInt64BE(BigInt(len), 2); }
    return Buffer.concat([head, payload]);
  }
  function attach(socket) {
    const c = { socket, room: null, role: null, alive: true, buf: Buffer.alloc(0), frag: [], count: 0, closed: false };
    c.send = (str) => { if (!c.closed) socket.write(frame(1, Buffer.from(str))); };
    c.sendObj = (o) => c.send(JSON.stringify(o));
    const rate = setInterval(() => { c.count = 0; }, 1000);
    const ping = setInterval(() => { if (!c.alive) return c.close(); c.alive = false; if (!c.closed) socket.write(frame(9, Buffer.alloc(0))); }, 20000);
    c.close = () => {
      if (c.closed) return; c.closed = true; clearInterval(rate); clearInterval(ping);
      try { socket.write(frame(8, Buffer.alloc(0))); } catch { /* ignore */ } socket.destroy();
      const r = c.room; if (r) { const other = c.role === 'host' ? r.guest : r.host; if (other) other.sendObj({ t: 'peer_left' }); if (c.role === 'host') { rooms.delete(r.code); if (r.guest) r.guest.room = null; } else r.guest = null; c.room = null; }
    };
    socket.on('data', d => {
      c.buf = Buffer.concat([c.buf, d]);
      for (;;) {
        const b = c.buf; if (b.length < 2) return;
        const fin = (b[0] & 0x80) !== 0, op = b[0] & 0x0f, masked = (b[1] & 0x80) !== 0; let len = b[1] & 0x7f, off = 2;
        if (len === 126) { if (b.length < 4) return; len = b.readUInt16BE(2); off = 4; } else if (len === 127) { if (b.length < 10) return; len = Number(b.readBigUInt64BE(2)); off = 10; }
        if (len > MAX_MSG || !masked) return c.close();
        if (b.length < off + 4 + len) return;
        const mask = b.subarray(off, off + 4), data = Buffer.from(b.subarray(off + 4, off + 4 + len));
        for (let i = 0; i < data.length; i++) data[i] ^= mask[i & 3];
        c.buf = b.subarray(off + 4 + len);
        if (op === 8) return c.close(); if (op === 9) { socket.write(frame(10, data)); continue; } if (op === 10) { c.alive = true; continue; }
        c.frag.push(data); if (!fin) continue;
        const msg = Buffer.concat(c.frag).toString('utf8'); c.frag = [];
        if (++c.count > 400) return c.close();
        handle(c, msg);
      }
    });
    socket.on('close', () => c.close()); socket.on('error', () => c.close());
  }
  function code() { const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; for (;;) { let s = ''; for (let i = 0; i < 4; i++) s += A[crypto.randomInt(A.length)]; if (!rooms.has(s)) return s; } }
  function handle(c, raw) {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (m && m.t === 'create' && !c.room) { const r = { code: code(), host: c, guest: null }; rooms.set(r.code, r); c.room = r; c.role = 'host'; return c.sendObj({ t: 'created', code: r.code }); }
    if (m && m.t === 'join' && !c.room) {
      const r = rooms.get(String(m.code || '').toUpperCase());
      if (!r) return c.sendObj({ t: 'error', msg: 'No such room' }); if (r.guest) return c.sendObj({ t: 'error', msg: 'Room is full' });
      r.guest = c; c.room = r; c.role = 'guest'; c.sendObj({ t: 'joined', code: r.code }); return r.host.sendObj({ t: 'peer' });
    }
    if (c.room) { const o = c.role === 'host' ? c.room.guest : c.room.host; if (o) o.send(raw); }   // opaque relay between the two peers
  }
  server.rooms = rooms;
  return server;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  createServer().listen(PORT, '0.0.0.0', () => console.log(`Aetherfall server on http://0.0.0.0:${PORT}  (WebSocket /ws)`));
}
