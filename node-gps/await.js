var async = require('async');
var request = require('request');
async.waterfall([
    function(cb){
        request.get("https://trackcar.herokuapp.com", function(err, res, body){
          console.log("status: ", res.statusCode);
          cb(null, res.statusCode);
        });
    },
    function(arg1, cb){
        console.log('one');
        cb(null, 'one');
    },
    function(arg1, cb){
        console.log('two');
        cb(null, 'two');
    },
    function(arg1, cb){
        cb(null, 'done');
    }
], function (err, result) {
  console.log(result);
});

console.log("selesai");
