var SerialPort  = require('serialport');
var arduinoPort = 'COM5';

// setting up the serial connection

var connectArd = function() {
  var arduinoSerial = new SerialPort(arduinoPort, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
  });

  // do something with incoming data
  arduinoSerial.on('data', function (data) {
    console.log(data.toString('utf-8'))
  });
  
  var sendData = function (data) {
    for(var i=0; i<data.length; i++){
      arduinoSerial.write(data, 'binary',(err)=>{
        if(err){
          console.err("Could not send data",err);
        }
      })
    }
  }

var inData = new Array;

inData[0] = 104;


sendData(inData[0])

  arduinoSerial.on('close', function(){
    console.log('ARDUINO PORT CLOSED');
    reconnectArd();
  });

  arduinoSerial.on('error', function (err) {
    console.error("error", err);
    reconnectArd();
  });

}

connectArd();

// check for connection errors or drops and reconnect
var reconnectArd = function () {
  console.log('INITIATING RECONNECT');
  setTimeout(function(){
    console.log('RECONNECTING TO ARDUINO');
    connectArd();
  }, 2000);
};