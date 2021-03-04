import NoteActionTypes from "./notesTypes";

let nextNoteId = 0

export const addNote = note => ({
     type: NoteActionTypes.ADD_NOTE,
     payload: note
})