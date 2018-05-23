var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyS0', { // change path
  baudRate: 9600,
});
 
var GPS = require('gps');
var gps = new GPS;
 
gps.on('data', function(data) {
  console.log(data, gps.state);
});
 
port.on('data', function(data) {
  gps.updatePartial(data);
});
