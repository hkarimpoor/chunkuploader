var express = require('express');
var router = express.Router();
var mangoose = require('mongoose');
 
var oneUser = require('../models/user');
var constr = "mongodb://hkarimpoor2003:Hk10301030@jijiwebdb-shard-00-00-n77bm.mongodb.net:27017,jijiwebdb-shard-00-01-n77bm.mongodb.net:27017,jijiwebdb-shard-00-02-n77bm.mongodb.net:27017/test?ssl=true&replicaSet=jijiwebDB-shard-0&authSource=admin";

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy(function(err) {
    // cannot access session here
  })
  res.render('signup', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var newUser = new oneUser({
      _id: new mangoose.Types.ObjectId(),
      email : req.body.email,
      username: req.body.username,
      password: req.body.pass
    });

    mangoose.connect(constr, function(err){
          if(err) {
            console.log(err);
            res.render('signup', { title: 'Express' });
          } else {                 
                  newUser.save(function(err) {
                    // if (err) throw err;
                    // req.session.username = req.body.username;
                    // req.session.pass  = req.body.pass;
                    res.render('login', { title: 'Hello - Please Login To Your Account' });

                  });                                        
          }
      }); 

});
module.exports = router;
