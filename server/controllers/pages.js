exports.index = (req, res) => {
    const data = {
        message: `Добро пожаловать в наш сервис заметок!<br>
            Здесь мы можете добавлять заметки.<br>
            <a href="/notes">А вот и их список</a>.`
    };

    res.render('main/main', Object.assign(data, req.commonData));
};

exports.error404 = (req, res) => res.sendStatus(404);
