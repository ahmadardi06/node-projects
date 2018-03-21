var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  res.io.on('connection', (socket) => {
    socket.on('kirimtoserver', (data) => {
      console.log('get: ', data.msg);
    });
    
    res.io.emit('pengumuman', {msg: "hai Ardi"});
  });
});

module.exports = router;
