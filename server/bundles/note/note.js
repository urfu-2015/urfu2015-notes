require('./note.css');

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

import Note from '../../../client/components/note';
import {addNote} from '../../../client/actions';
import {noteApp} from '../../../client/reducers';

const store = createStore(noteApp);

function render() {
    ReactDom.render(
        <Note store={store} />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);

fetch('/api/notes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.notes.forEach(note => {
            store.dispatch(addNote(note));
        });
    });
