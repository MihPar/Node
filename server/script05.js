const http = require('http')
const favicon = require('serve-favicon')
const path = require('path')
const finalhandler = require('finalhandler')

let _favicon = favicon(path.join(__dirname, 'favicon.ico'))
let count = 0

const server = http.createServer(function(request, response) {
    count++
    const done = finalhandler(request, response)

    _favicon(request, response, function(err) {
        if(err) {
            return done(err)
        } else {
            switch(request.url) {
                case '/friends':
                    response.write('Hello my friends: ' + count)
                    // response.end()
                    break
                case '/my_family':
                    response.write('My diar family, I love you: ' + count)
                    // response.end()
                    break
                case '/my_wife':
                    response.write('I love you, my wify: ' + count)
                    // response.end()
                    break
                default:
                    response.write('404 not found ')
                    // response.end()
            }
            response.write('Hello Node.js: ' + count)
            response.end()
        }
    })
})

server.listen(3000, '127.0.0.1', function() {
    console.log('Server was started at port 3000')
})