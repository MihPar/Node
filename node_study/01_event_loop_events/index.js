const fs = require('fs')
const dns = require('dns')

function info(text) {
    console.log(text, performance.now().toFixed(2))
 }

console.log('Program start')
// setTimeout
setTimeout(() => {info('Timeout 1')}, 0)
setTimeout(() => {
    process.nextTick(function() {info('NextTick 2')})
    info('Timeout 2')
}, 100)

// close events
fs.writeFile('./file.txt', 'Hello Node.js', function() {
    info('File written')
})

// Promses
Promise.resolve().then(() => {
    info('Promise 1')
})

// next tick
process.nextTick(function() {
    info('NextTick 1')
})

// setImmediate(check)
setImmediate(function() {
    info('Immediate 1')
})

//setInterval
let intervalCount = 0
let intervalId = setInterval(function() {
    info(`SetInterval ${intervalCount += 1}`)
    if(intervalCount === 3) {
        clearInterval(intervalId)
    }
}, 50)

// I/O E vents
dns.lookup('localhost', function(err, address, family) {
    info('DNS 1, localhost')
    Promise.resolve().then(function() {
        info('Promise 2')
    })
    process.nextTick(function() {
        info('Next tick 3')
    })
})

console.log('Program end')