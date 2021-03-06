import NoteActionTypes from "./notesTypes";

const INITIAL_STATE = {
  notes: [],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NoteActionTypes.ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case NoteActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, i) => i !== action.payload),
      };
      case NoteActionTypes.EDIT_NOTE:
           const notes = state.notes
           return notes.map((note, i) => {
                if(i === action.i){
                     return {
                          ...state,
                          notes: [...state.notes, action.payload]
                     }
                } else {
                     return note
                }
           })
    default:
      return state;
  }
};

export default notesReducer;
