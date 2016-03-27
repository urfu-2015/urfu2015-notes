import React from 'react';
import {selectNote} from '../actions';

export default ({name, isActive, store}) => {
    function onClick(event) {
        event.preventDefault();

        var url = event.target.getAttribute('href');
        var selectedNoteName = url.split('/').pop();

        store.dispatch(selectNote(selectedNoteName));
    }

    return (
        <li>
            {isActive ?
                name :
                <a href={"notes/" + name} onClick={onClick}>{name}</a>}
        </li>
    );
};
