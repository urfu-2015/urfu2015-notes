const User = require('../models/user');
const passport = require('./passport/index');

const LocalStartegy = require('./passport/strategies/local');

passport.registerSerializer(User.getSerializator());
passport.registerDeserializer(User.getDeserializator());

passport.registerStrategy('local', new LocalStartegy((username, password, done) => {
    const user = User.findByName(username);

    if (!user) {
        done(new Error('Пользователя с таким именем не существует'));
        return;
    }

    if (!user.checkPassword(password)) {
        done(new Error('Неправильный пароль'));
        return;
    }

    done(null, user);
}));

module.exports = passport;
