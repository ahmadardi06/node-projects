var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/index-establish-connection.html');
});

server.listen(6969);
