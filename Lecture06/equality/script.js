console.log(1 == '1') // true
console.log(1 === '1') // false

// peculiar cases 

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) // false

console.log('' == false) // true, both typecast to 0

// this doesn't hold good for abstract equality 
// a = b,  b = c  ... implies that .. a = c

console.log([1,2] == [1,2]) // false
