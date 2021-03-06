import React from "react";
import NoteCard from "../note-card/NoteCard";
import { connect } from "react-redux";
import { ListFrame, List } from "./NoteListStyles";

const NoteList = ({ notes }) => {
  const renderNotes = () => {
    return notes.notes.map((note, i) => (
      <NoteCard key={i} note={note} idx={i} />
    ));
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
