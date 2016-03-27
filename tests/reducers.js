const assert = require('assert');
const noteApp = require('../client/reducers').noteApp;

describe('reducers', () => {
    describe('noteApp', () => {
        it('should add Note to store', () => {
            const note = {
                name: 'name',
                text: 'text'
            };
            const state = {
                notes: []
            };

            const nextState = noteApp(state, {
                type: 'ADD_NOTE',
                note: note
            });

            assert(state.notes.length === 0);
            assert(nextState.notes.length === 1);
        });
    });
});
