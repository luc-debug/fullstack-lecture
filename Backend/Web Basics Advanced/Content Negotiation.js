const http = require('http');
const url = require('url');

const PORT = 3003;

const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
];

// -----------------------------
// Helper Functions
// -----------------------------

function getResponseType(req) {
  const accept = req.headers.accept || '';

  if (accept.includes('application/json')) {
    return 'json';
  }

  if (accept.includes('text/html')) {
    return 'html';
  }

  // Browser senden oft */*
  if (accept.includes('*/*') || accept === '') {
    return 'json';
  }

  return null;
}

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });

  res.end(JSON.stringify(data, null, 2));
}

function sendHTML(res, statusCode, html) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  res.end(html);
}

function sendNotAcceptable(res) {
  sendJSON(res, 406, {
    error: 'Requested content type is not supported',
  });
}

// -----------------------------
// Server
// -----------------------------

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  const pathname = parsed.pathname;
  const method = req.method;

  const responseType = getResponseType(req);

  if (!responseType) {
    return sendNotAcceptable(res);
  }

  // ---------------------------------
  // GET /
  // ---------------------------------

  if (pathname === '/' && method === 'GET') {
    return sendHTML(
      res,
      200,
      `
      <html>
        <head>
          <title>Node.js HTTP Server</title>
        </head>
        <body>
          <h1>Plain Node.js HTTP Server</h1>

          <h2>Available Routes</h2>

          <ul>
            <li>GET /</li>
            <li>GET /health</li>
            <li>GET /users</li>
            <li>GET /users/:id</li>
            <li>POST /users</li>
          </ul>
        </body>
      </html>
      `
    );
  }

  // ---------------------------------
  // GET /health
  // ---------------------------------

  if (pathname === '/health' && method === 'GET') {
    const data = {
      status: 'ok',
      uptime: process.uptime(),
    };

    if (responseType === 'html') {
      return sendHTML(
        res,
        200,
        `
        <html>
          <body>
            <h1>Server Health</h1>
            <p>Status: ${data.status}</p>
            <p>Uptime: ${data.uptime}</p>
          </body>
        </html>
        `
      );
    }

    return sendJSON(res, 200, data);
  }

  // ---------------------------------
  // GET /users
  // ---------------------------------

  if (pathname === '/users' && method === 'GET') {
    if (responseType === 'html') {
      const userList = users
        .map((u) => `<li>${u.id}: ${u.name} (${u.role})</li>`)
        .join('');

      return sendHTML(
        res,
        200,
        `
        <html>
          <body>
            <h1>Users</h1>
            <ul>${userList}</ul>
          </body>
        </html>
        `
      );
    }

    return sendJSON(res, 200, users);
  }

  // ---------------------------------
  // GET /users/:id
  // ---------------------------------

  const userMatch = pathname.match(/^\/users\/(\d+)$/);

  if (userMatch && method === 'GET') {
    const id = parseInt(userMatch[1], 10);

    const user = users.find((u) => u.id === id);

    if (!user) {
      return sendJSON(res, 404, {
        error: `User with id ${id} not found`,
      });
    }

    if (responseType === 'html') {
      return sendHTML(
        res,
        200,
        `
        <html>
          <body>
            <h1>User Details</h1>
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Role: ${user.role}</p>
          </body>
        </html>
        `
      );
    }

    return sendJSON(res, 200, user);
  }

  // ---------------------------------
  // POST /users
  // ---------------------------------

  if (pathname === '/users' && method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const { name, role } = JSON.parse(body);

        if (!name || !role) {
          return sendJSON(res, 400, {
            error: 'Fields "name" and "role" are required',
          });
        }

        const newUser = {
          id: users.length + 1,
          name,
          role,
        };

        users.push(newUser);

        return sendJSON(res, 201, newUser);
      } catch (error) {
        return sendJSON(res, 400, {
          error: 'Invalid JSON body',
        });
      }
    });

    return;
  }

  // ---------------------------------
  // 404
  // ---------------------------------

  sendJSON(res, 404, {
    error: `Route ${method} ${pathname} not found`,
  });
});

// -----------------------------
// Start Server
// -----------------------------

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
