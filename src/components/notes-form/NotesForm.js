import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNote } from "../../redux/notes/notesActions";

const NotesForm = ({ addNote }) => {
  const [note, setNote] = useState("");

  const changeHandler = (e) => {
    setNote(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (note !== " ") {
      addNote(note);
      setNote("");
    }
  };



  return (
    <>
      <form className="noteForm">
        <Input onChange={changeHandler} value={note} />
        <Button onClick={handleAdd} inverted color="red">
          Note It{" "}
        </Button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
});

export default connect(null, mapDispatchToProps)(NotesForm);
