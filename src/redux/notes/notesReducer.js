import NoteActionTypes from "./notesTypes"



const INITIAL_STATE = {
          allNotes: [],
          byNote: {}
}

const notesReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case NoteActionTypes.ADD_NOTE:
               const { id, note } = action.payload;
          return {
               ...state,
               allNotes: [...state.allNotes, id],
               byNote: {...state.byNote, [id]: {note}}
          }
          default:
               return state;
     }
}

export default notesReducer