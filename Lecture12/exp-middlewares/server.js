const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res ,next) {

    // TODO: decrypt all query params as per our logic

    next()
}

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res) => {
    console.log(req.query)

    // TODO: eval the code actually
    res.send('=========== eval result =========')
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})