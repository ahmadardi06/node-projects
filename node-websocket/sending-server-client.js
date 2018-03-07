var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/index-sending-server-client.html');
});

io.on('connection', (socket) => {
	socket.emit('pengumuman', {msg: "Hai User."});
});

server.listen(6969);
