import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Li } from "./NoteCardStyles";
import { addNote, deleteNote, updateNote, editNote } from "../../redux/notes/notesActions";

const NoteCard = ({ deleteNote, editNote, note, idx }) => {
  
    //  const [text, setText] = useState("");
    //  const [clicked, setClicked] = useState(false);

    // const editHandler= (e) => {
    //      setClicked(true)
    //  } 

    // const changeHandler = (e) => {
    //      setText(e.target.value)
    //      let newNote = text
    //      console.log(newNote)
    //       updateNote(newNote)
    // }

  
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
