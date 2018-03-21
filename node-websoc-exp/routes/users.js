var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');

  res.io.on('connection', (socket) => {
    socket.on('ddtoserver', (data) => {
      console.log("msg: ", data.msg);
    });

    res.io.emit('ddtoclient', {msg: "dd to client"});
  });
});

module.exports = router;
