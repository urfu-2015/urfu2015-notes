const User = require('../models/user');
const passport = require('./passport/index');

passport.registerSerializer(User.getSerializator());
passport.registerDeserializer(User.getDeserializator());

module.exports = passport;
