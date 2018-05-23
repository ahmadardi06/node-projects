var request = require('request');
var API = "https://trackcar.herokuapp.com/api/mobil/5ab851b9b397a927081303b5";

request.get(API, function(req, res, bod){
 if(res != undefined && bod != undefined){
  console.log("undefined");
 }
 else{
  console.log("defined");
 }

 console.log('bod: ', bod);
 console.log('res: ', res);
});
