const express = require('express')

const app = express()

app.set('view engine', 'hbs')

app.use('/', express.static(__dirname + '/public'))

app.get('/hello', (req, res) => {
  res.render('hello', {
    name: req.query.name
  })
})

app.listen(9898, () => {
  console.log('started on http://localhost:9898/')
})