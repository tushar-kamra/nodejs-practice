const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/secret") {
        res.end("no secret data found");
        return;
    }
    res.end("Hello world");
});

server.listen(8888);
