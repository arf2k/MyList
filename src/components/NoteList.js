import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


const NoteList = (props) => {
 

  const renderNotes = () => {
         return props.addNotes.map((note, index) => <ListItem key={index} index={index} note={note}>{note}</ListItem>)
   
    }


   
     return(
          <>
        <List>  
      {renderNotes()} 
        </List>
       
        </>
    )
}

export default NoteList