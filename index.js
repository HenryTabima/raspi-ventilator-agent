const io = require('socket.io-client')

const socket = io('http://localhost:3000')

let i = 0

setInterval(() => {
  socket.emit('new data', {
    timestamp: new Date(),
    pressure: Math.sin((Math.PI / 20) * i),
    flow: 3 + Math.random()
  })
  i++
}, 250)
