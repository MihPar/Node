const http = require('http')
const fs = require('fs')

let counter = 0
const server = http.createServer(function(request, response) {
    counter++
    if(request.url) {
        fs.readFile('/favicon.ico')
    }
    switch(request.url) {
        case '/students':
            response.write('STUDENTS')
            // response.end()
            break
        case '/':
        case '/courses':
            response.write('FROM ' + 'BACK')
            // response.end()
            break
        default:
            response.write('404 not found')
            // response.end()
    }
    response.write(' Hello Node.js ' + counter)
    response.end()
})
server.listen(3000, '127.0.0.1', console.log('Server was started at port 3000'))