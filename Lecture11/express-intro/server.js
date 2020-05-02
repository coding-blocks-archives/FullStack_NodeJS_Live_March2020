const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

function middleware1 (req, res, next) {
    console.log(req.url)
    res.send('sidubgisdugb')
    next()
}
function middleware2 (req, res, next) {
    console.log(req.hostname)

    res.send('sidubgisdugb')
}


app.get('/x', middleware1, middleware2)



app.listen(3333, () => {
    console.log('server started on http://0.0.0.0:3333')
})