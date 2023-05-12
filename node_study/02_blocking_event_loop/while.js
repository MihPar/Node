let isRunning = true

setTimeout(() => isRunning = false, 0)
process.nextTick(function() {
    console.log('Next tick')
})

while(isRunning) {
    console.log('While loop is true...')
}