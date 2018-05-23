var Gpio = require('onoff').Gpio;
var LED = new Gpio(18, 'in', 'both');

LED.watch(function(err, value){
 if(err) {
  console.log(err);
  return;
 }

 console.log(value);
});

function onKeluar(){
 LED.unexport();
}

process.on('SIGINT', onKeluar);
