var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // check if saved
  res.send('respond with a resource');
});

router.get('/users:userid/sessions', function(req, res, next) {
  res.send('listprograms');
});

module.exports = router;