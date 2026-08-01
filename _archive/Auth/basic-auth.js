const http = require("http");


http.createServer((req, res) => {

    const auth = req.headers['authorization'];

    if (!auth || auth.indexOf('Basic ') !== 0) {
        res.statusCode = 401; // 401 Unauthorized
        res.setHeader(
            'WWW-Authenticate',
            'Basic realm="Secure Area"'
        );
        return res.end();
    }

    // Basic <base64(username:password)>
    const base64Credentials = auth.split(' ')[1];
    const credentials = Buffer.from(
        base64Credentials,
        'base64'
    ).toString('utf8');

    const [username, password] = credentials.split(':');

    if (username !== 'admin' || password !== 'admin') {
        res.statusCode = 403; // 403 Forbidden
        return res.end();
    }


    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!\n");

}).listen(3000);

