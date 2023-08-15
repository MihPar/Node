const http = require('http')
const fs = require('fs')
const {readFile} = require('node:fs/promises')

let count = 0
const server = http.createServer(async function(req, res) {
    // count++
    // switch(req.url) {
    //     case '/favicon.ico':
    //         res.writeHead(200, {"Content-Type": 'image/x-icon'})
    //         const context = await readFile('./favicon.ico', {encoding: 'utf8'})
    //         res.end(context)
    //     case '/':
    //     case '/home':
    //         const content = "best free only course"
    //         res.write(content)
    //         res.end()
    //         break
    //     default: 
    //         res.write("404 not found")
    //         res.end()
    // }
    // res.write(count + "Hello Node.js")
    const result = function() {
        return count++
    }
    res.end("Hello Node.js: " + result())
})
server.listen(3000, '127.0.0.1', function() {
    console.log("Server was started at port 3000 ")
})