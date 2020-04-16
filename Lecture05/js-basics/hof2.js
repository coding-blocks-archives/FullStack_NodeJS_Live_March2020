function greet(name) {
    console.log('Hello', name)
}
function createGreeter(greeting) {

    function greet(name) {
        // here we treat name as if it is string
        console.log(greeting, name)
    }

    return greet
}

function getName() {
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')

console.log(typeof g1)

console.log(greet('Arnav'))
console.log(greet('Prateek'))

console.log(g1('Arnav'))
console.log(g1('Prateek'))

console.log(g2('Arnav'))
console.log(g2('Prateek'))