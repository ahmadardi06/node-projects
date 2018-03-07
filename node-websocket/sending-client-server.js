var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/index-sending-client-server.html');
});

io.on('connection', (socket) => {
	socket.on('memo', (data) => {
		console.log('memo: ', data.msg);
	});
});

server.listen(6969);
