const io = require('socket.io-client')

const initSerialPort = require('./libs/serialport')

const parser = initSerialPort()

let pressure = 0
let flow = 0

parser.on('data', assignData)

function toFloat(value){ 
  return parseFloat(value)
}

function assignData(data){
  data = data.split(',').map(toFloat)
  flow = data[1]
  pressure = data[0]

}

const socket = io('http://localhost:3000')

const INTERVAL_TIME = 250

setInterval(() => {
  socket.emit('new data', {
    timestamp: new Date(),
    pressure: pressure,
    flow: flow
  })

}, INTERVAL_TIME)
