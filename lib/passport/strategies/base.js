'use strict';

class Strategy {
    constructor(verify) {
        this._verify = verify;
    }

    authenticate(req, done) {
        done(new Error('Такого пользователя нет'));
    }
}

module.exports = Strategy;
