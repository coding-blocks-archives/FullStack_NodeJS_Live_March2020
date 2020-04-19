// Answer in context of C++/Java
// What does the keyword "this" mean, what does it refer to ?
// In which places in code can we NOT use "this" ?

function checkThis() {
  console.log(this)
}

let obj = {
  "a": 10,
  b: 'asdsa',
  c: true,
  d: function () {
    console.log(this)
  },
  10: 32246,
  true: 'asdasd',
  e: {
    l: 234,
    m: 'sdgsdg',
    n: function () {
      console.log(this)
    },
  },
}
