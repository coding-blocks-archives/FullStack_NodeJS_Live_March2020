function helloSayer() {
    console.log('world')
    return 'hello';
}
let x = () => { helloSayer(); }
console.log(x)

// console.log(() => {
//     helloSayer();
// })
