import React, { useState } from 'react';
import { List, Icon } from 'semantic-ui-react';


const NoteList = (props) => {
 

  const renderNotes = () => {
        return props.addNotes.map((note, index) =>  <List.Item  style={{marginLeft: "20px", marginTop: "5px"}} key={index} note={note} onClick={() => props.editNote(note)}> {note} 
           <List.Icon style={{marginLeft: "15px"}} onClick={() => {props.deleteNote(index)}} name='trash alternate' /> 
        </List.Item>)  
   
    }



 

   
     return(
          <>
        <List style={{display: "inline-flex", flexDirection: "column", height: "110px", flexWrap: "wrap" }}>  
      {renderNotes()} 
        </List>
       
        </>
    )
}

export default NoteList