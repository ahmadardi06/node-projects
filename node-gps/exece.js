var spawn = require('child_process').exec;
var ls = spawn('node hello.js', function(err, stdout, stderr){
 if(err) return console.log(err);
 
 console.log(stdout);
});
