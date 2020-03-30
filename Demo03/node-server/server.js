const express = require('express')

const app = express()

let pageViews = 0

app.get('/', (req, res) => {
  pageViews++
  console.log(req.protocol, req.hostname, req.url)
  res.sendFile(__dirname + '/files/helloworld.html')
})

app.get('/views', (req, res) => {
  res.send('Number of views = ' + pageViews)
})

app.listen(3333)
