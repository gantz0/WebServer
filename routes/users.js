var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login/facebook', function(req, res, next) {
  res.send('facebook user');
});

router.get('/login/google', function(req, res, next) {
    res.send('google user');
});

module.exports = router;
