import NoteActionTypes from "./notesTypes";

const INITIAL_STATE = {
  notes: [],
//   text: ""
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NoteActionTypes.ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    }
    case NoteActionTypes.DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note, i) => i !== action.payload),
      };
    }
      case NoteActionTypes.UPDATE_NOTE:
           return state.notes.notes.map((note, i) => {
                if(i === action.i){
                     return {
                          ...state,
                          notes: [...state.notes, action.payload],
                          editing: !note.editing
                     }
                } else {
                     return note
                }
           });
           case NoteActionTypes.EDIT_NOTE: {
            return (state.notes.map((note) => note.id === action.id ? {...state, editing: !note.editing} : note))
            // return state.notes.notes.map((note) => note.id === action.id ? {...note, editing: !note.editing} : note);
            
            }
     
    default:
      return state;
  }
};

export default notesReducer;
