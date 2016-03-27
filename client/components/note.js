import React from 'react';
import Header from './header';
import Footer from './footer';
import Navigation from './navigation';

export default ({store}) => {
    const {notes, selectedNoteName} = store.getState();
    const {name, text} = notes.filter(note => {
        return note.name === selectedNoteName;
    })[0] || {};

    return (
        <div>
            <Header />

            <a href="/notes">← К списку заметок</a>

            <section className="note__wrapper">
                <Navigation notes={notes} name={name} store={store} />

                <div className="note">
                    <div className="note__name">{name}</div>
                    <div className="note__text">{text}</div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
