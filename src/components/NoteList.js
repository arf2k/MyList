import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


const NoteList = (props) => {
 

  // const renderNotes = () => {
  //        return props.addNote.map((index, note) => <li key={index} index={index} note={note} />)
   
  //   }

  //   let entries = props.addNote
  //   let listItems = entries.map(renderNotes)
   
     return(
          <>
          <h1>Note List</h1>
        <ul>  
        {props.addNote}
        </ul>
        </>
    )
}

export default NoteList