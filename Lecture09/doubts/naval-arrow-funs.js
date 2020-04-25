/**
 * Lambda ƛ Functions
 *
 * Pure functions or lambda functions are those that are :
 * 1. stateless
 * 2. output depends only on the input and nothing else
 * 3. for the same input, output will always be the same
 *
 *
 * y = f(x) = 2x + 3
 *
 */

let a = 10
// function f1(x) {
//   return 2 * x + 3
// }

let f1 = (x) => (2 * x + 3)

// f1(10) -> 23
// it will be always 23, whatever the case

let count = 0
function f2(delta) {
  count += delta
  return count
}


let f3 = (x) => {
    // do other things
    return x + count // this is not illegal and works
}
