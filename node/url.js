const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let myUrl = url.parse(req.url);
    let filepath = `.${myUrl.pathname}`;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/html');
            return res.end('404 file not found');
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000');
});
