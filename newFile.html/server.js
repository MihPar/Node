const http = require('http')
 http.createServer((req, res) => {
    res.writeHead(200, {'Content-Typ': 'text/html'})
    res.end('Hello Node.js')
})
.listen(8080, 'localhost', () => {
    console.log('Server was started')
})