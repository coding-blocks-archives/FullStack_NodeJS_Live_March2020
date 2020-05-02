const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

app.use('/xyz', express.static(__dirname + '/public'))

app.listen(4321, () => {
    console.log('server started on http://localhost:4321')
})
