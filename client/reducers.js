const initialState = {
    notes: [],
    selectedNoteName: null
};

export const noteApp = (state = initialState, action) => {
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
