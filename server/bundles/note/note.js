require('./note.css');

import React from 'react';
import ReactDom from 'react-dom';

import Note from '../../../client/bundles/note/note';

var rootEl = document.getElementById('root');

function getNoteNameFromUrl(url) {
    url = url || window.location.pathname;

    return url.split('/').pop();
}

fetch('/api/notes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var notes = data.notes;

        function render(url) {
            var selectedNoteName = getNoteNameFromUrl(url);
            var selectedNote = notes.filter(function (note) {
                return note.name === selectedNoteName;
            })[0];

            ReactDom.render(
                <Note
                    notes={notes}
                    name={selectedNote.name}
                    text={selectedNote.text}
                />,
                rootEl
            );
        }

        window.render = render;

        render();
    });
