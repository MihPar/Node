/* method fs.createReadStream() */

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    const content = fs.createReadStream(__dirname + '/index.html', 'utf8')
    content.pipe(res)
})

server.listen(4000, 'localhost', function() {
    console.log('Server was started at port http://localhost:4000')
})

/* method fs.readFile() */

const http = require('http')
const fs = require('fs').promises

const serverOne = http.createServer(function(req, res) {
    const stream = fs.readFile(__dirname + '/index.html', 'utf8')
    stream
    .then(function(content) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content)
    })
    .catch(function(err) {
        res.writeHead(200)
        res.end(err)
        return 
    })
})
serverOne.listen(4000, function() {
    console.log('Server was started port http://localhost:4000')
})

/* output text/json */

const http = require('http')
const fs = require('fs').promises

let indexFile

const serverTwo = http.createServer(function(req, res) {
    fs.readFile(__dirname + '/index.html', 'utf8')
    .then(function(contents) {
        indexFile = contents
        res.writeHead(200, {'Content-Type': 'text.html'})
        res.end(indexFile)
    })
})

serverTwo.listen(4000, function() {
    console.log('Server was started at port http://localhost:4000')
})

/* output application/json */

const http = require('http')
const fs = require('fs').promises

const serverThree = http.createServer(function(req, res) {
    fs.readFile(__dirname + '/index.html', 'utf8')
    .then(function(contents) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(contents)
    })
})

serverThree.listen(4000, function() {
    console.log('Server was started at port http://localhost:4000')
})

/* output attachment; filename = oceanpals.csv */

const http = require('http')
const data = 'name, secodname, lastname\n Mickle, Vicktorovich, Paramonov'

const serverFour = http.createServer(function(req, res) {
    
        res.writeHead(200, {
            'Content-Type': 'text.csv',
            'Content-Disposition': 'attachment; filename = oceanpals.csv'
        })
        res.end(data)
    })

serverFour.listen(4000)