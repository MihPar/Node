const http = require('http')

let counter = 0
const server = http.createServer(function(request, response) {
    counter++
    response.write('Node.js: ' + counter)
    response.end()
})
server.listen(3000, function() {console.log('Server was started at port 3000')})