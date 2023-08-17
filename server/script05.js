const http = require('http')

// let PORT = process.argv || 3000
let couter = 0
const server = http.createServer(function(request, response) {
    // couter++
    response.write('Node.js: ' + couter)
    response.end()
})  
server.listen(3000, '127.0.0.1', function() {console.log(`Server was started at 3000`)})


    // switch(request.url) {
    //     case '/students':
    //         response.write('STUDENTS')
    //         // response.end()
    //         break
    //     case '/':
    //     case '/courses':
    //         response.write('FROM ' + 'BACK')
    //         // response.end()
    //         break
    //     default:
    //         response.write('404 not found')
    //         // response.end()
    // }
    // response.write(' Hello Node.js ' + counter)
    // response.end()


// var http = require('http')
// var favicon = require('serve-favicon')
// var finalhandler = require('finalhandler')
// var path = require('path')

// var _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))

// var server = http.createServer(function onRequest (req, res) {
//   var done = finalhandler(req, res)

//   _favicon(req, res, function onNext (err) {
//     if (err) return done(err)

//     // continue to process the request here, etc.

//     res.statusCode = 404
//     res.end('oops')
//   })
// })

// server.listen(3000)