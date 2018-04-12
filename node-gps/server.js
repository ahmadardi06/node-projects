var sleep = require('sleep');
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyS0', { // change path
  baudRate: 9600
});
 
var GPS = require('gps');
var gps = new GPS;
 
gps.on('data', function(data) {
 if(data.lat || data.lon){
  console.log("GPS Actived");
  console.log("lat: ", data.lat);
  console.log("lng: ", data.lon);
  console.log("");
  sleep.sleep(1);
 }
});
 
port.on('data', function(data) {
  gps.updatePartial(data);
});
