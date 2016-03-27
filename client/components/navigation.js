import React from 'react';
import NavigationItem from './navigationItem';

export default ({notes, name, store}) => (
    <ul className="note__navigation">
        {notes.map(note => (
            <NavigationItem
                key={note.name}
                name={note.name}
                isActive={note.name === name}
                store={store}
            />
        ))}
    </ul>
);
