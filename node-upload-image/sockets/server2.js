var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res, next){
 res.sendFile(__dirname+"/index2.html");
});

var user = 0;
io.on("connection", function(socket){
 user++;
 console.log("user connected. ", user);

 socket.on("disconnect", function(){
  user--;
  console.log("user disconneted.", user);
 });
});

http.listen(3000, function(){
 console.log("run on port 3000");
});
