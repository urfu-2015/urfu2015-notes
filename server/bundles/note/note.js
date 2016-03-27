require('./note.css');

var noteTemplate = require('../../../client/bundles/note/note.hbs');
var rootEl = document.getElementById('root');

function getNoteNameFromUrl(url) {
    url = url || window.location.pathname;

    return url.split('/').pop();
}

function render(notes, selectedNoteName) {
    var selectedNote = notes.filter(function (note) {
        return note.name === selectedNoteName;
    })[0];

    rootEl.innerHTML = noteTemplate({
        notes: notes,
        name: selectedNote.name,
        text: selectedNote.text
    });

    var navigationEl = document.querySelector('.note__navigation');

    function onClick(event) {
        event.preventDefault();

        var url = event.target.getAttribute('href');
        var selectedNoteName = getNoteNameFromUrl(url);

        render(notes, selectedNoteName);
    }

    navigationEl.addEventListener('click', onClick, false);
}

fetch('/api/notes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var notes = data.notes;
        var selectedNoteName = getNoteNameFromUrl();

        render(notes, selectedNoteName);
    });
