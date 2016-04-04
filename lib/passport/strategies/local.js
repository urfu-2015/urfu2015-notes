'use strict';

var BaseStrategy = require('./base');

class LocalStrategy extends BaseStrategy {
    authenticate(req, done) {
        const username = req.body.username;
        const password = req.body.password;

        // done(err, user);
        this._verify(username, password, done);
    }
}

module.exports = LocalStrategy;
