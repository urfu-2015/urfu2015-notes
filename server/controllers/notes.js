'use strict';

const Note = require('../models/note');

exports.list = (req, res) => {
    const notes = Note.findAll();
    const data = {
        notes: notes
    };

    res.render('notes/notes', Object.assign(data, req.commonData));
};

exports.item = (req, res) => {
    res.render('note/note', req.commonData);
};

exports.create = (req, res) => {
    const data = {
        name: req.body.name,
        text: req.body.text,
        createdAt: Date.now()
    };

    const note = new Note(data);

    note.save();

    res.send(data);
};
