const http = require('http');

const hostName = process.env.hostName || '127.0.0.1';
const port = process.env.port || '3000';

console.log(process.argv);
// console.log(global);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('!hello Shashi :)');
});

server.listen(port, hostName,() => {
    console.log(`Server listening at ${ hostName + ':' + port }`);
})