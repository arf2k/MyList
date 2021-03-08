import React from "react";
import NoteCard from "../note-card/NoteCard";
import { connect } from "react-redux";
import { ListFrame, List } from "./NoteListStyles";
import EditNote from "../edit-note/EditNote"

const NoteList = ({ notes }) => {
  const renderNotes = () => {
    console.log(notes)
    
    // return notes.notes.map((note, i) => (
      
    //   <div key={note.id}>
    //     {note.editing ? <EditNote note={note} key={note.id} idx={i}/> :
    //           <NoteCard key={note.id} note={note} idx={i} />}
    //           </div>

    // ));
  };

  return (
    <>
      <ListFrame>
        <List>{renderNotes()}</List>
      </ListFrame>
    </>
  );
};

const mapStateToProps = ({ notes }) => ({
  notes,
});

export default connect(mapStateToProps)(NoteList);
