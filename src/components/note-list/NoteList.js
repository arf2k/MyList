import React from "react";
// import NoteCard from "../note-card/NoteCard";
import { List } from "semantic-ui-react"
import { connect } from "react-redux";
import { ListFrame } from "./NoteListStyles";
import { getNotesList } from "../../redux/notes/notesSelector"


const NoteList = ({notes}) => {

const renderNotes = () => {
  return notes.map((note, index) => <li key={index} note={note}> {note}</li>) 
}
   
     return(
          <>
          <ListFrame>
        <List style={{display: "inline-flex", flexDirection: "column", height: "110px", flexWrap: "wrap" }}>  
          {renderNotes}
        </List>
        </ListFrame>
       
        </>
    )
}

const mapStateToProps = state => ({
  notes: state.notes
})



export default connect(mapStateToProps)(NoteList)