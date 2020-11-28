import React from 'react';
import { List, Icon } from 'semantic-ui-react';


const NoteList = (props) => {
 

  const renderNotes = () => {
        return props.addNotes.map((note, index) =>  <List.Item key={index} index={index} note={note}>{note}
        </List.Item>  ) 
   
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