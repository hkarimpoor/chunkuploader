var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.username = "hamid";
  req.session.pass = "123"
  res.render('login', { title: 'Express' });  
});

router.post('/', function(req, res, next) {
   if (req.session.username == undefined || req.session.pass == undefined){
     res.render('login', { title: 'Hello - Please Login To Your Account' });
  }	else{  
     if(req.session.username == "hamid" && req.session.pass == "123"){      
       res.render('dashboard', { title: 'Express' });  
     } else {
       res.render('login', { title: 'Hello - Please Login To Your Account' });
     }
   } 


  

});

module.exports = router;
