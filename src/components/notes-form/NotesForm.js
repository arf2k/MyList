import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNote, addText } from "../../redux/notes/notesActions";

const NotesForm = ({ addNote, addText, text }) => {
  const [note, setNote] = useState("")

  // const changeHandler = (e) => {
  //   addText(e.target.value)
  // };

  const changeHandler = (e) => {
    setNote(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if(note !== "") {
      addNote(note);
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

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
  addText: (value) => dispatch(addText(value))
});


const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
