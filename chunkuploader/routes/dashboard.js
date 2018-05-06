var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.cookies.user == undefined || req.cookies.pass == undefined){
    res.render('login', { title: 'Hello - Please Login To Your Account' });
  }	else{
    res.render('dashboard');
  }

});

module.exports = router;