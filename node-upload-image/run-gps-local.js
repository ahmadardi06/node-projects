var io = require('socket.io-client');
var sc = io.connect('https://trackcar.herokuapp.com/');
var exec = require('child_process').exec;
var Gpio = require('onoff').Gpio;

var request = require('request');
var API = "https://trackcar.herokuapp.com/api/mobil/5ab851b9b397a927081303b5";

request.get(API, (err, res, bod)=>{
	if (!err && res.statusCode == 200) {
  var info = JSON.parse(bod);
  console.log(Number(info.relay.lamp));
 }
});

