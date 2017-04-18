var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/count', function(req,res){
  if(req.session.count){
      req.session.count++;
  }
  else{
      req.session.count = 1;
  }
  res.send('count : ' + req.session.count);
});

router.post('/auth/login', function (req, res) {
  var user ={
      username:'easytype',
      password:'1111',
      displayname:'easy'
  };
    res.send(req.body.userid);
    req.session.displayname = user.displayname;
});

router.get('/auth/login', function (req, res) {
   var output=`
    <h1> Login </h1>
    <form action="/auth/login" method="post">
        <p>
            <input type="text" name="userid" placeholder="USERID">
        </p>
        <p>
            <input type="password" name="pwd" placeholder="PASSWORD">
        </p>
        <input type="submit" name="LOGIN">
    </form>
   `;
   res.send(output);
});

module.exports = router;
