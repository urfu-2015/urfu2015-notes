const User = require('../models/user');
const passport = require('./passport/index');

const LocalStartegy = require('./passport/strategies/local');

passport.registerSerializer(User.getSerializator());
passport.registerDeserializer(User.getDeserializator());

passport.registerStrategy('local', new LocalStartegy((username, password, done) => {
    const user = User.find(username, password);

    const err = user ? null : new Error('Неправильный логин или пароль');

    done(err, user);
}));

module.exports = passport;
