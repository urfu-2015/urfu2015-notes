'use strict';

var BaseStartegy = require('./base');

class LocalStartegy extends BaseStartegy {
    authenticate(req, done) {
        const username = req.body.username;
        const password = req.body.password;

        // done(err, user);
        this._verify(username, password, done);
    }
}

module.exports = LocalStartegy;
