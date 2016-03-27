const initialState = {
    notes: [],
    selectedNoteName: null
};

exports.noteApp = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'ADD_NOTE':
            return {
                notes: state.notes.concat([action.note]),
                selectedNoteName: state.selectedNoteName
            };
        case 'SELECT_NOTE':
            return {
                notes: state.notes,
                selectedNoteName: action.selectedNoteName
            };
        default:
            return state;
    }
};
