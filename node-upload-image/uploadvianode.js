var request = require('request');
var fs = require('fs');
var formData = {
 takefoto: fs.createReadStream('/home/pi/takefoto.jpg')
};

request.post({url: "https://trackcar.herokuapp.com/history-drivers/upload/foto", formData: formData}, function(err, res, body){
 if(err) return console.log(err);

 console.log("upload successful!");
});
