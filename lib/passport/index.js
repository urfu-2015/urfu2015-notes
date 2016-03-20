const User = require('../../models/user');

exports.authenticate = (req, res) => {
    const user = User.find(req.body.username, req.body.password);

    if (!user) {
        req.session.authFailMessage = 'Пользователь не найден';
        res.redirect('/login');
        return;
    }

    req.session.auth = {
        id: user.id
    };

    res.redirect('/');
};

exports.onlyAuth = (req, res, next) => {
    const auth = req.session.auth;
    if (auth && auth.id) {
        if (User.findById(auth.id)) {
            return next();
        }
    }

    res.sendStatus(401);
};
