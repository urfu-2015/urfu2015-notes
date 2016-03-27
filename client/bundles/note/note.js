import React from 'react';

import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';

function onClick(event) {
    event.preventDefault();

    var url = event.target.getAttribute('href');

    window.render(url);
}

const NavigationItem = ({name, isActive}) => (
    <li>
        {isActive ?
            name :
            <a href={"notes/" + name} onClick={onClick}>{name}</a>}
    </li>
);

const Navigation = ({notes, name}) => (
    <ul className="note__navigation">
        {notes.map(note => (
            <NavigationItem
                key={note.name}
                name={note.name}
                isActive={note.name === name}
            />
        ))}
    </ul>
);

export default ({notes, name, text}) => (
    <div>
        <Header />

        <a href="/notes">← К списку заметок</a>

        <section className="note__wrapper">
            <Navigation notes={notes} name={name} />

            <div className="note">
                <div className="note__name">{name}</div>
                <div className="note__text">{text}</div>
            </div>
        </section>

        <Footer />
    </div>
);
