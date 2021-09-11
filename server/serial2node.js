const WebSocket = require("ws")
const ws = new WebSocket.Server({
  port: 8989
})

ws.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message: ${message}`)
    if (message.includes("\z")) {
      console.log(message.slice(1))
      portWrite(message.slice(1))
    }
  })
  ws.send('Websocket connected')
})

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM5', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
function portWrite(arg) {
  port.write(arg + '\n', (err) => {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log(`message written: ${arg}`);
    });
}

//setTimeout(portWrite, 1500, 'hbn'); 

parser.on('data', data =>{
  console.log('Arduino:', data);
});

