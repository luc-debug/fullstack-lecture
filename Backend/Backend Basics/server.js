const http = require('http');
const url = require('url');

const PORT = 3003;

const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
];

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function sendHTML(res, statusCode, html) {
  res.writeHead(statusCode, { 'Content-Type': 'text/html' });
  res.end(html);
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;
  const method = req.method;

  // GET /
  if (pathname === '/' && method === 'GET') {
    return sendHTML(res, 200, `
      <html>
        <body>
          <h1>Welcome to the plain Node.js server</h1>
          <p>Available routes:</p>
          <ul>
            <li>GET /users</li>
            <li>GET /users/:id</li>
            <li>POST /users</li>
            <li>GET /health</li>
          </ul>
        </body>
      </html>
    `);
  }

  // GET /health
  if (pathname === '/health' && method === 'GET') {
    return sendJSON(res, 200, { status: 'ok', uptime: process.uptime() });
  }

  // GET /users
  if (pathname === '/users' && method === 'GET') {
    return sendJSON(res, 200, users);
  }

  // GET /users/:id
  const userMatch = pathname.match(/^\/users\/(\d+)$/);
  if (userMatch && method === 'GET') {
    const id = parseInt(userMatch[1], 10);
    const user = users.find((u) => u.id === id);
    if (!user) {
      return sendJSON(res, 404, { error: `User with id ${id} not found` });
    }
    return sendJSON(res, 200, user);
  }

  // POST /users
  if (pathname === '/users' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const { name, role } = JSON.parse(body);
        if (!name || !role) {
          return sendJSON(res, 400, { error: 'Fields "name" and "role" are required' });
        }
        const newUser = { id: users.length + 1, name, role };
        users.push(newUser);
        return sendJSON(res, 201, newUser);
      } catch {
        return sendJSON(res, 400, { error: 'Invalid JSON body' });
      }
    });
    return;
  }

  // 404 fallback
  sendJSON(res, 404, { error: `Route ${method} ${pathname} not found` });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
