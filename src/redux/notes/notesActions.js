import NoteActionTypes from "./notesTypes";

export const addNote = (note) => ({
  type: NoteActionTypes.ADD_NOTE,
  payload: note,
});

export const deleteNote = (key) => ({
  type: NoteActionTypes.DELETE_NOTE,
  payload: key,
});

export const editNote = (key, note) => ({
  type: NoteActionTypes.EDIT_NOTE,
  payload: key, note
});

export const addText = value => ({
     type: NoteActionTypes.ADD_TEXT,
     payload: value
})
