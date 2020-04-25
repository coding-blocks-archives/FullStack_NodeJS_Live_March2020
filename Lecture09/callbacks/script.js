

function doSomething (done) {
    console.log('1. doing something')
    setTimeout(done, 0)
}

doSomething(() => {
    console.log('2. it was done')
})

console.log('3. end')