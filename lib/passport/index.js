const User = require('../../models/user');

exports.authenticate = options => {
    return (req, res) => {
        const user = User.find(req.body.username, req.body.password);

        if (!user) {
            req.session.authFailMessage = options.failureMessage;
            res.redirect(options.failureRedirect);
            return;
        }

        req.session.auth = {
            id: user.id
        };

        res.redirect(options.successRedirect);
    };
};

exports.initUser = (req, res, next) => {
    const auth = req.session.auth;
    if (auth && auth.id) {
        req.user = User.findById(auth.id);
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
