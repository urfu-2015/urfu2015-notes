exports.login = (req, res) => {
    const data = {};

    if (req.session.authFailMessage) {
        data.error = req.session.authFailMessage;
    }

    res.render('login/login', Object.assign(data, req.commonData));
};

exports.profile = (req, res) => {
    res.send('Страница профиля');
};
