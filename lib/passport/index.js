'use strict';

const User = require('../../models/user');

let serialize = () => {};
let deserialize = () => {};

exports.authenticate = options => {
    return (req, res) => {
        const user = User.find(req.body.username, req.body.password);

        if (!user) {
            req.session.authFailMessage = options.failureMessage;
            res.redirect(options.failureRedirect);
            return;
        }

        req.session.auth = {
            id: serialize(user)
        };

        res.redirect(options.successRedirect);
    };
};

exports.initUser = (req, res, next) => {
    const auth = req.session.auth;
    if (auth && auth.id) {
        req.user = deserialize(auth.id);
    }
    next();
};

exports.onlyAuth = (req, res, next) => {
    if (!req.user) {
        res.sendStatus(401);
        return;
    }

    next();
};

exports.registerSerializer = fn => {
    if (typeof fn === 'function') {
        serialize = fn;
    }
};

exports.registerDeserializer = fn => {
    if (typeof fn === 'function') {
        deserialize = fn;
    }
};
