'use strict';

let serialize = () => {};
let deserialize = () => {};

const strategies = {};

exports.authenticate = (name, options) => {
    return (req, res, next) => {
        const strategy = strategies[name];

        if (!strategy) {
            next(new Error(`Не зарегистрирована стратегия "${name}"`));
            return;
        }

        strategy.authenticate(req, (err, user) => {
            if (err) {
                req.session.authFailMessage = err.message;
                res.redirect(options.failureRedirect);
                return;
            }

            req.session.auth = {
                id: serialize(user)
            };

            res.redirect(options.successRedirect);
        });
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

exports.registerStrategy = (name, strategy) => {
    strategies[name] = strategy;
};
