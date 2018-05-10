var express = require('express');
var router = express.Router();
var oneUser = require('../models/user');
var constr = "mongodb://hkarimpoor2003:Hk10301030@jijiwebdb-shard-00-00-n77bm.mongodb.net:27017,jijiwebdb-shard-00-01-n77bm.mongodb.net:27017,jijiwebdb-shard-00-02-n77bm.mongodb.net:27017/test?ssl=true&replicaSet=jijiwebDB-shard-0&authSource=admin";
var mangoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });  
});

router.post('/', function(req, res, next) {

    var currentUser = {
      username : req.body.username,
      password : req.body.pass
    }

    mangoose.connect(constr, function(err){
      if(err) {
        console.log(err);
      } else {                 
        oneUser.findOne(currentUser, function(err, user){
          if(err || !user) {
            res.render('login', { title: 'Hello - Please Login To Your Account' });
          } else {
            req.session.user = user;
            res.render('dashboard', { title: 'Express' });
          }
          
        });                                    
      }
  }); 
});

module.exports = router;
