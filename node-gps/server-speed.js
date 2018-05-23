var socket = require('socket.io-client');
var sc = socket.connect('https://trackcar.herokuapp.com/', {query: 'idMobil=5ab851b9b397a927081303b5'});
//var sc = socket.connect('http://172.20.10.2:3000/');

var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyS0', { // change path
  baudRate: 9600
});
 
var GPS = require('gps');
var gps = new GPS;
 
gps.on('data', function(data) {
 if(data.type === "GGA"){
  if(data.lat || data.lon){
   console.log("lat: ", data.lat);
   console.log("lng: ", data.lon);
   console.log("geoidal: ", data.geoidal);
   sc.emit('send to server map', {lat: data.lat, lon: data.lon, geo: data.geoidal});
   //sc.emit('realtime gps', {lat: data.lat, lon: data.lon, geo: data.geoidal});
   //sc.emit('realtime gps', {data: data});
  }
 }

 if(data.type === "RMC"){
  if(data.speed){
   console.log("speed: ", data.speed);

   //sc.emit('realtime speed', {speed: data.speed});
  }
 }
});
 
port.on('data', function(data) {
  gps.updatePartial(data);
});
