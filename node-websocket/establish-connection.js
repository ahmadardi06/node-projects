var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/index-establish-connection.html');
});

var index = io.of("/");
var admin = io.of("/admin");

var userIndex = 0;
index.on("connection", function(sc){
 userIndex++;
 console.log("Client connected to index.", userIndex);

 sc.on("disconnect", function(){
  userIndex--;
  console.log("Client disconnected to index.", userIndex);
 });
});

var userAdmin = 0;
admin.on("connection", function(sc){
 userAdmin++;
 console.log("Client connected to admin.", userAdmin);

 sc.on("disconnect", function(){
  userAdmin--;
  console.log("Client disconnected to admin.", userAdmin);
 });
});

server.listen(3000, function(){
 console.log("run on port 3000");
});
