import { createServer } from "http";

const port = 3000;
console.log('Hello World');

const server = createServer(function (req, res) {
    res.statusCode = 200;
    res.end('Hello World');
});

server.listen(port, function () {
    console.log('Server running at port ' + port);
});