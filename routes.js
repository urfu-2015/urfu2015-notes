'use strict';

const user = require('./controllers/user');
const pages = require('./controllers/pages');
const notes = require('./controllers/notes');

const passport = require('./lib/passport');

module.exports = function (app) {
    app.get('/', pages.index);

    app.get('/login', user.login);
    app.post('/login', passport.authenticate({
        successRedirect: '/',
        failureRedirect: '/login',
        failureMessage: 'Неправильный логин или пароль'
    }));

    app.get('/profile', passport.onlyAuth, user.profile);

    app.get('/notes', notes.list);
    app.post('/notes', notes.create);
    app.get('/notes/:name', notes.item);

    app.all('*', pages.error404);

    /* eslint no-unused-vars: 0 */
    /* eslint max-params: [2, 4] */
    app.use((err, req, res, next) => {
        console.error(err);

        res.sendStatus(500);
    });
};
