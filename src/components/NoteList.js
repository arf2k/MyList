import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


const NoteList = (props) => {
 

  const renderNotes = () => {
         return props.addNotes.map((note, index) => <li key={index} index={index} note={note}>{note}</li>)
   
    }


   
     return(
          <>
          <h1>Note List</h1>
        <ul>  
{renderNotes()}
        </ul>
        </>
    )
}

export default NoteList