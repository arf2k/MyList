import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Li } from "./NoteCardStyles";
import { addNote, deleteNote, updateNote, editNote } from "../../redux/notes/notesActions";

const NoteCard = ({ deleteNote, editNote, note, idx }) => {
  
  
  
   return (
    <Li>
   {note}
     <Icon name ="edit" onClick={() => editNote(note.id)} />
  
   
      <Icon name="trash alternate" onClick={() => deleteNote(idx)} />
    </Li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (key) => dispatch(deleteNote(key)),
  editNote: (key) => dispatch(editNote(key))
});

export default connect(null, mapDispatchToProps)(NoteCard);
