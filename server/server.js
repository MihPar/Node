const http = require('http')
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
} 

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function(err, data) {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const server = http.createServer(async function(req, res) {
    switch(req.url){
        case "/home":
            try {
                const data = await readFile('server/home1.html')
                res.write(data)
                res.end()
            } catch(err) {
                res.write("somethingh wrong")
                res.end()
            }
            
            break
        case '/about':
            await delay(3000)
                res.write('ABOUT COURSE')
                res.end()
            break
        default:
            res.write('404 not found')
            res.end()
    }
})
server.listen(3000, '127.0.0.1', function() {
    console.log('Server was started at port 3000')
})