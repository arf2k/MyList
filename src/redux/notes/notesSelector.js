export const getNotesState = store => store.notes;

export const getNotesList = store => getNotesState(store)? getNotesState(store).allNotes: [] 

export const getNoteById = (store, id) => getNotesList(store)? { ...getNotesState(store).byNote[id], id} : {}

export const getNotes = store => getNotesList(store).map(id => getNoteById(store, id))