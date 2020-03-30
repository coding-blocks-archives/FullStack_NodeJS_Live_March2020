const fs = require('fs')

fs.writeFileSync('helloword.txt', 'Hello World')

const data = fs.readFileSync('helloword.txt')
console.log(data.toString())
