import NoteActionTypes from "./notesTypes"



const INITIAL_STATE = {
          notes: [],
        
}

const notesReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case NoteActionTypes.ADD_NOTE:
             
          return {
               ...state,
               notes: [...state.notes, action.payload]
          }
          default:
               return state;
     }
}

export default notesReducer