const express = require('express');
const passport = require('../config/passport');
const cookieSession = require('cookie-session');
const router = express.Router();


//Configure cookie session
router.use(cookieSession({
  name: 'google-auth-session',
  keys: [process.env.COOKIE_SESSION_KEY],
}));

// Initialize Passport
router.use(passport.initialize());
router.use(passport.session());


router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        session: true
    }),
    (req, res) => {
        //Redirect user to homepage
        const baseUrl = process.env.BASE_URL;
        res.redirect(`${baseUrl}/home`);
    }
);

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
    });
    res.redirect('/');
});

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

module.exports = router;