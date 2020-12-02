import React, { useState } from 'react';
import { List, Icon } from 'semantic-ui-react';


const NoteList = (props) => {
 

  const renderNotes = () => {
        return props.addNotes.map((note, index) =>  <List.Item key={index} note={note}> {note} 
           <List.Icon onClick={() => {props.deleteNote(index)}} name='trash alternate' /> 
        </List.Item>)  
   
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