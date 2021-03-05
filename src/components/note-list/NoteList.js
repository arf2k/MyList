import React from "react";
import NoteCard from "../note-card/NoteCard";
import { connect } from "react-redux";
import { ListFrame, List } from "./NoteListStyles";
// import { getNotesList } from "../../redux/notes/notesSelector"

const NoteList = ({notes}) => {


 const renderNotes = () => {
return (
  notes.notes.map((note, index) => <NoteCard key={index} note={note} />))
}
     
     return(
       
          <>
          <ListFrame>
<List>
            {renderNotes()}
            </List>
        </ListFrame>
       
        </>
    )




}

const mapStateToProps = ({notes}) => ({
  notes
})


export default connect(mapStateToProps)(NoteList)