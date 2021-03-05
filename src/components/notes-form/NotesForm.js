import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { connect } from "react-redux";
import { addNote } from "../../redux/notes/notesActions"

const NotesForm = ({ addNote }) => {
     
     const [note, setNote] = useState('')

     const changeHandler = (e) => {
          setNote(e.target.value)
     }

     // const addNote = (e) => {
     //      e.preventDefault()
     //     if(note.length > 0) {
     //      setNote("")
     //      setItem([...item, note]) 
     //     } else {
     // console.log( "I hate you")
     //      }
     // }


     const handleAdd = (e) => {
          e.preventDefault();
          if(note !== " "){
               addNote(note)
               setNote("")
         }
     }
          
     // const deleteNote = (index) => {
     //      const newList = [...item]
     //      // const noteIndex = newList.findIndex(note => note.id === index.id)
     //      if (index > -1) {
     //           newList.splice(index, 1);
     //         } else {
     //           newList.push(index);
     //         }
     //      setItem(newList)
     // }
 
     // const editNote = (note) => {
     //      const newList = [...item]
     //      setNote(note)
     //      newList.splice(note, 1)

     // }
      
     return(
          
<>
     <form className="noteForm" >
          <Input onChange={changeHandler} value={note}/>
          <Button onClick={handleAdd} inverted color="red">Note It </Button>
     </form>
   </>
     
     )
}


const mapDispatchToProps = dispatch => ({
     addNote: note => dispatch(addNote(note))
    
})




export default connect(null, mapDispatchToProps)(NotesForm)

