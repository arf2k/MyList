import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux"
import { addNote } from "../../redux/notes/notesActions";

const NotesForm = () => {
  const [note, setNote] = useState("")


  const changeHandler = (e) => {
    setNote(e.target.value)
  }

  const dispatch = useDispatch()


  const handleAdd = (e) => {
    e.preventDefault();
    if(note !== "") {
     dispatch(addNote(note))
      setNote("")
    }
  };



  return (
    <>
      <form className="noteForm">
        <Input type="text" placeholder="Add a note" onChange={changeHandler} value={note} />
        <Button onClick={handleAdd} inverted color="red">
          Note It{" "}
        </Button>
      </form>
    </>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addNote: (note) => dispatch(addNote(note)),
//   addText: (value) => dispatch(addText(value))
// });



export default NotesForm;
