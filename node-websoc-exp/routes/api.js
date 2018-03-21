var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb-stitch-remotecars-drvsi:yy6y%&8mNG@remotecars1-shard-00-00-0nn52.mongodb.net:27017,remotecars1-shard-00-01-0nn52.mongodb.net:27017,remotecars1-shard-00-02-0nn52.mongodb.net:27017/test?ssl=true&replicaSet=remotecars1-shard-0&authSource=admin');
var db = mongoose.connection;

/* GET home page. */
router.get('/mobil', function(req, res, next) {
  var datamobil = [
    {nama: "Avanza", tipe: "MPV"},
    {nama: "Pajero", tipe: "SUV"},
    {nama: "Fortuner", tipe: "MPV"},
  ];
  res.json(datamobil);

  console.log(mongoose.connection.readyState);
  db.on('error', console.error.bind(console, 'connection error: '));
  db.on('open', () => {
    console.log('connection successfully');
  });

});

router.get('/mobil/:id', (req, res, next) => {
  var idnya = req.params.id;
  res.json({tipe: idnya});
});

module.exports = router;
