var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page-calendar', function(req, res, next) {
  res.render('calendar', { title: 'Express' });
});

module.exports = router;
