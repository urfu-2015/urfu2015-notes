export const addNote = note => {
    return {
        type: 'ADD_NOTE',
        note: note
    };
};

export const selectNote = selectedNoteName => {
    return {
        type: 'SELECT_NOTE',
        selectedNoteName: selectedNoteName
    };
};
