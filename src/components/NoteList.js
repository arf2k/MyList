import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


const NoteList = (props) => {
 

  const renderNotes = (note) => {
         return <li key={note.key}>{note.text}</li>
    }

    let entries = props.addNote
    let listItems = entries.map(renderNotes)
   
     return(
          <>
          <h1>Note List</h1>
        <ul>  
      {listItems}
        </ul>
        </>
    )
}

export default NoteList