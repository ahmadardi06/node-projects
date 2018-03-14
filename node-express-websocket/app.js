var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

var Gpio = require('onoff').Gpio;
var pushButton = new Gpio(17, 'in', 'both');
var LED = new Gpio(4, 'out');

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.get('/lampu', (req, res) => {
	res.render('lampu');
});

app.get('/', (req, res) => {
	res.render('home');
});

var count = 0;

io.on('connection', (ws) => {
	count++;

	io.emit('berita', { msg: "One user is online", user: count});
	ws.emit('pribadi', { msg: "Welcome you are online"});

	ws.on('pribadi', (msg) => {
		console.log(msg.msg);
	});

	ws.on('disconnect', () => {
		count--;
		io.emit('berita', { msg: "One user is offline", user: count});
	});

	ws.on('statuslampu', (data) => {
		if(data.status == 0)
			io.emit('notiflampu', { msg: "Lampu OFF"});
		else
			io.emit('notiflampu', { msg: "Lampu ON"});

		if(data.status != LED.readSync()){
			LED.writeSync(data.status);
		}
		console.log(data.status);
	});
});


server.listen(3000, () => {
	console.log("Run on port *:3000");
});

process.on('SIGINT', function () { //on ctrl+c
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
  process.exit(); //exit completely
});
