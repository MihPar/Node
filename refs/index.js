const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "views", "index.html"),
        "utf8",
        function (err, content) {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "views", "about.html"),
        "utf8",
        function (err, content) {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if(req.url === '/api/users'){
        res.writeHead(200, {'Content-Type': 'text/json'})
        const users = [
            {name: 'Mickhail', age: 41},
            {name: 'Tatiana', age: 39}
        ] 
        res.end(JSON.stringify(users))
    }
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
    req.on("data", function (chunk) {
      body.push(Buffer.from(chunk));
    });
    req.on("end", function () {
      const message = body.toString().split("=")[1];
      res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `);
    });
  }
});

server.listen(4000, function () {
  console.log("Server was started at port 4000");
});
