const fs = require('fs')

let isRunning = true

setTimeout(() => isRunning = false, 10)
process.nextTick(function() {
    console.log('Next tick')
})

function setImmediatePromise() {
    return new Promise(function(resolve, reject) {
        setImmediate(function() {
            resolve()
        })
    })
}

async function whileLoop() {
    while(isRunning) {
        console.log('While loop is true...')
        await setImmediatePromise()
    }
}
whileLoop().then(function() {
    console.log('While loop ended')
})