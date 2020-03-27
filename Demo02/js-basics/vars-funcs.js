console.log('hello')

let x = 10
var y = 11
console.log(x / 4)

let a = 10
let b = 'asfasfafs'
let c = true 
let d = [1,2,3]

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

// equality 

console.log(1 == 1)
console.log(1 == '1')
console.log(1 === '1')

console.log("0 == ''", 0 == '')

// functions

function add (a, b) {
    return a + b
}
function printVal(arg) {
    console.log('arg = ', arg)
}

function area(a, b) {
    if (typeof b === 'undefined') {
        return a * a * Math.PI
    } else {
        return a * b
    }
}