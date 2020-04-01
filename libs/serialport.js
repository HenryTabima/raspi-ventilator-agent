'use strict'

const SerialPort = require('serialport')

function initSerialPort () {
  const Readline = SerialPort.parsers.Readline
  const port = new SerialPort('/dev/ttyUSB0', {
    baudRate: 9600
  })
  const parser = new Readline()

  port.pipe(parser)

  port.on('error', function (err) {
    console.log('Error: ', err.message)
  })

  return parser
}

module.exports = initSerialPort
