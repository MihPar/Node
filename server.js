const http = require("http");
const { readFile } = require("node:fs/promises");

const authenticatedUsers = {};

function createCookie() {
    return "user-" + Math.floor(Math.random() * 1e9);
}

function handleLogIn(req, res) {
    let rawData = "";
    req.on("data", function (chunk) {
        rawData += chunk;
    });
    req.on("end", async function () {
        try {
            const user = JSON.parse(rawData);
            const content = await readFile("users.json", "utf8");
            const arr = JSON.parse(content);
            for (const elem of arr) {
                if (
                    elem.email === user.email &&
                    elem.password === user.password
                ) {
                    const cookie = createCookie();
                    authenticatedUsers[cookie] = elem;
                    res.writeHead(200, {
                        "Content-Type": "application/json",
                        "Set-Cookie": cookie,
                    });
                    res.end(JSON.stringify({ success: true }));
                    return;
                }
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    success: false,
                    msg: "This user does not exist",
                })
            );
        } catch (err) {
            res.writeHead(200, { "Content-Type": "text/html" });
            const content = await readFile("/404.html", { encoding: "utf8" });
            res.end(content);
        }
    });
}

function main() {
    try {
        const server = http.createServer(async function (req, res) {
            if (authenticatedUsers[req.headers.cookie]) {
                if (req.url === "/index.html" || req.url === "/") {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    const content = await readFile("./index.html", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else if (req.url === "/sign-up.html") {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    const content = await readFile("./sign-up.html", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else if (req.url === "/log-in.html") {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    const content = await readFile("./log-in.html", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else if (req.url === "/sign-up.js") {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    const content = await readFile("./sign-up.js", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else if (req.url === "/log-in.js") {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    const content = await readFile("./log-in.js", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else if (req.url === "/favicon.ico") {
                    res.writeHead(200, { "Content-Type": "image/x-icon" });
                    const content = await readFile("./favicon.ico", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else if (req.url === "/style.css") {
                    res.writeHead(200, { "Content-Type": "text/css" });
                    const content = await readFile("./style.css", {
                        encoding: "utf8",
                    });
                    res.end(content);
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    const content = await readFile("./404.html", {
                        encoding: "utf8",
                    });
                    res.end(content);
                }
            } else {
                if (req.url === "/log-in") {
                    handleLogIn(req, res);
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    const content = await readFile("./log-in.html", {
                        encoding: "utf8",
                    });
                    res.end(content);
                }
            }
        });
        server.listen(4000, "localhost", () => {
            console.log("Server was strated at port http://localhost:4000");
        });
    } catch (err) {
        console.log(err.message);
    }
}
main();
