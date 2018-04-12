var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var index = io.of('/');
var admin = io.of('/admin');

app.get('/', function(req, res, next){
 res.sendFile(__dirname+'/index1.html');
});

var users = 0;
index.on('connection', function(sc){
 users++;
 console.log("welcome index: ", users);

 sc.on("pesan", function(data){
  console.log("msg index: ", data.msg);
  index.emit("pesan", {msg: data.msg});
 });

 sc.on('disconnect', function(){
  users--;
  console.log("goodbye index: ", users);
 });
});

var adminuser = 0;
admin.on('connection', function(sc){
 adminuser++;
 console.log("welcome admin", adminuser);

 sc.on("pesan", function(data){
  console.log("msg admin: ", data.msg);
  admin.emit("pesan", {msg: data.msg});
 });

 sc.on('disconnect', function(){
  adminuser--;
  console.log("goodbye admin", adminuser);
 });
});

http.listen(3000, function(){
 console.log("run on port 3000");
});
