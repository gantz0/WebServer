var express= require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: '830803597083171',
        clientSecret: '7e1dcc226e72cf70aae8701d1644fb71',
        callbackURL: "http://localhost:3000/users/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    console.log('serialize');
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log('deserialize');
    done(null, user);
});

router.get('/login/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/users/logon/facebook_success',
        failureRedirect: '/users/logon/facebook_fail'
    }));


router.get('/logon/facebook_success', ensureAuthenticated, function (req, res) {
    var info = JSON.stringify(req.session);
    var infojson = JSON.parse(info);
    console.log("================================================================");
    console.log(info);
    console.log("================================================================");
    console.log(infojson);
    console.log("================================================================");
    console.log(infojson.passport['user'].displayName);
    res.send(infojson.passport['user'].displayName);
});

router.get('/logon/facebook_fail', ensureAuthenticated, function (req, res) {
    res.send('facebook user');
});

router.get('/login/google', function (req, res, next) {
    res.send('google user');
});



function ensureAuthenticated(req, res, next) {
    // 로그인이 되어 있으면, 다음 파이프라인으로 진행
    if (req.isAuthenticated()) {
        return next();
    }
    // 로그인이 안되어 있으면, login 페이지로 진행
    res.redirect('/');
}


module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    return router;
};