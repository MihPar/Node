const http = require('http')
let responseCount = 0
const server = http.createServer(function(request, response) {
    responseCount++
    switch(request.url) {
        case '/favicon.ico':
            response.writeHead(200, {"Content-Type": "image/x-icon"})
            response.readFile('./favicon.ico')
            break
        case '/students':
            response.write('STUDENTS')
            break
        case '/courses':
            response.write('FRONT ' + 'BACK')
            break
        default: 
            response.write("404 not found")
    }
    response.write(" Hello Node.js: " + responseCount + ".")
    response.write(' I make a server!!!')
    response.end()
})
server.listen(3000, "127.0.0.1", console.log("Server was started at port 3000"))
