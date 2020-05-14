

let socket = io()

socket.on('connect', () => {
  document.getElementById('socketId').innerText = socket.id
})