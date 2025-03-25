const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;

const initializePassport = (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
};

module.exports = { initializePassport };