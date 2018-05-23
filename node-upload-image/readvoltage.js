var Gpio = require('onoff').Gpio;

var LED18 = new Gpio(18, 'in');
console.log(LED18.readSync());

process.on('SIGINT', function () { //on ctrl+c
 LED18.unexport(); // Unexport LED GPIO to free resources
 process.exit(); //exit completely
});
