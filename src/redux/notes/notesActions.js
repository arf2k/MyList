import NoteActionTypes from "./notesTypes";


export const addNote = note => ({
     type: NoteActionTypes.ADD_NOTE,
     payload: note
})

