var express = require('express');
var router = express.Router();

// var OrientDB =  require('orientjs');
//router.use(passport.session());
// var server = OrientDB({
//     host:       'localhost',
//     port:       2424,
//     username:   'root',
//     password:   'mos0909'
// });
//
// var db = server.use('o2');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login.html');
});


 // router.get('/welcome', function (req,res) {
 //     if(req.session.displayname){
 //     res.send(`
 //   <h1>WELCOME , ${req.session.displayname}</h1>
 //   `);
 //     }
 //     else{
 //         res.send('No name');
 //     }
 // });

//  router.get('/auth/logout', function (req, res) {
//     delete req.session.displayname;
//  });
//
// router.post('/auth/login', function (req, res) {
//   var user ={
//       username:'easytype',
//       password:'1111',
//       displayname:'easy'
//   };
//   // 저장된 이후에 함수를 호출해야함.
//     req.session.save(function(){
//         req.session.displayname = user.displayname;
//         res.redirect('/welcome');
//     });
// });
//
// router.get('/auth/login', function (req, res) {
//    var output=`
//     <h1> Login </h1>
//     <form action="/auth/login" method="post">
//         <p>
//             <input type="text" name="userid" placeholder="USERID">
//         </p>
//         <p>
//             <input type="password" name="pwd" placeholder="PASSWORD">
//         </p>
//         <input type="submit" name="LOGIN">
//     </form>
//    `;
//    res.send(output);
// });

module.exports = router;
