var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kontrolled', { title: 'Kontrol LED' });

  res.io.on('connection', (socket) => {
    socket.on('statuslampu', (data) => {
      console.log("status lampu: ", data.msg);
    });
  });
});

module.exports = router;
