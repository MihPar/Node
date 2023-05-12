// const http = require('http')
// const fs = require('fs')

// const books = JSON.stringify([
//     {title: 'The Alchemist', author: 'Paul Caelo', year: '1985'},
//     {title: 'The prophet', author: 'Kahlil Gibran', year: '1986'}
// ])

// const author = JSON.stringify([
//     {author: 'Paul Caelo', countryOfBirth: 'Mexico', yearOfBirth: '1956'},
//     {author: 'Lahlil Gbran', countryOfBirth: 'USA', yearOfBirth: '1967'}
// ])

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     // switch(req.url) {
//     //     case '/books':
//     //         res.end(books)
//     //         break
//     //     case '/author':
//     //         res.end(author)
//     //         break
//     //     default:
//     //         res.end(JSON.stringify({error: 'Resource not found'}))
//     // }
//     if(req.url === '/books') {
//         res.writeHead(200)
//         res.end(books)
//     } else if(req.url === '/author') {
//         res.writeHead(200)
//         res.end(author)
//     } else {
//         res.writeHead(404)
//         res.end(JSON.stringify({error: 'Resource not found'}))
        
//     }
// })
// server.listen(4000)
