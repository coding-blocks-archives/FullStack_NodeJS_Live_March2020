const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {

  console.log('connection', socket.id)

  socket.on('colorit', (data) => {
    io.emit('colorit', data)
  })
  
})


server.listen(4646, () => {
  console.log('server started on http://localhost:4646')
})