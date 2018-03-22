var express = require('express');
var router = express.Router();
//jalankan terminal
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kontrolled', { title: 'Kontrol LED' });

  res.io.on('connection', (socket) => {
    socket.on('statuslampu', (data) => {
      console.log("status lampu: ", data.msg);
    });

    socket.on('statusgps', (data) => {
      console.log("status gps: ", data.msg);
      if(data.msg == 1)
        exec('sudo systemctl start gps-python.service', (err, stout, sterr) => {
          console.log("stout: ", stout);
        });
      else
        exec('sudo systemctl stop gps-python.service', (err, stout, sterr) => {
          console.log("stout: ", stout);
        });
    });
  });
});

module.exports = router;
