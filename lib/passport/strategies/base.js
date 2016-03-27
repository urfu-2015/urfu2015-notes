'use strict';

class Startegy {
    constructor(verify) {
        this._verify = verify;
    }

    authenticate(req, done) {
        done(new Error('Такого пользователя нет'));
    }
}

module.exports = Startegy;
