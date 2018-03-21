var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');

  res.io.on('connection', (socket) => {
    socket.on('getMessage', (data) => {
      console.log('message: ', data.msg);
    });
  });
});

module.exports = router;
