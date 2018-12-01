var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/details', function (req, res, next) {
  res.render('details');
});
router.get('/write', function (req, res, next) {
  res.render('write');
});

module.exports = router;
