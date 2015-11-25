var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var pathToView = __dirname + '/../views/';
router.get('/une-chose', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(pathToView+'index.html');
});


module.exports = router;
