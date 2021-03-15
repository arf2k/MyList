import React from "react";
import NoteCard from "../note-card/NoteCard";
import { connect } from "react-redux";
import { ListFrame, List } from "./NoteListStyles";
import EditNote from "../edit-note/EditNote"

const NoteList = ({ notes }) => {
  const renderNotes = () => {
    
    return notes.notes.map((note, i) => (
      
      <div key={note.id}>
        {note.editing ? <EditNote note={note} key={note.id} idx={i}/> :
              <NoteCard key={note.id} note={note} idx={i} />}
              </div>

    ));
  };

  // right now the list renders but when click on edit it says the can't read property map of undefined but then remove notes.notes and just make notes.map and the update form triggers

  return (
    <>
      <ListFrame>
        <List>{renderNotes()}</List>
      </ListFrame>
    </>
  );
};

const mapStateToProps = ({ notes }) => ({
  notes
});

export default connect(mapStateToProps)(NoteList);
