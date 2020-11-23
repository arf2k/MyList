import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NoteList from './NoteList.js'

function NotesForm(){
     
   const [note, setNote] = useState("")  
     const [item, setItem] = useState([])

     const changeHandler = (e) => {
          setNote(e.target.value)
     }

     const addNote = () => {
         if(item.length === 0 ) {setItem(note)
     } else {
               const newNote = [...item, note]
               setItem(newNote)}
               setNote("")
          
     }
     
//     const renderNotes = () => {
//           return item.map((note, index) => <li key={index} index={index} note={note}/> )
//      }

     return(
          <>
          <h1>Inside note form</h1>
     <form className="noteForm" >
          <TextField id="outlined-basic" label="Notes" onChange={changeHandler} value={note}/>
          <Button onClick={addNote} size="small" variant="outlined">Note It </Button>
     </form>
   
     <NoteList addNote={item}/>
     </>
     )
}
export default NotesForm