// Zero-dependency static server for Memory Palace Gym (works on Railway, Render, Fly, or locally).
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'public');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.txt': 'text/plain' };

http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p === '/health') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end('ok'); }
  let file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.stat(file, (err, st) => {
    if (err || st.isDirectory()) file = path.join(ROOT, 'index.html'); // single-page app: everything else serves the page
    fs.readFile(file, (e, buf) => {
      if (e) { res.writeHead(500); return res.end('Server error'); }
      res.writeHead(200, {
        'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': file.endsWith('.html') ? 'no-cache' : 'public, max-age=86400',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      });
      res.end(req.method === 'HEAD' ? undefined : buf);
    });
  });
}).listen(PORT, () => console.log(`Memory Palace Gym running on http://localhost:${PORT}`));
