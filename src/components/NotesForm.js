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
         if(note.length > 0) {
          setNote("")
          setItem([...item, note]) 
         } else {
     return "I hate you"
          }
     }
          



     return(
          <>
          <h1>Inside note form</h1>
     <form className="noteForm" >
          <TextField id="outlined-basic" label="Notes" onChange={changeHandler} value={note}/>
          <Button onClick={addNote} size="small" variant="outlined">Note It </Button>
     </form>
   {/* {renderNotes()} */}
     <NoteList addNotes={item}/>
     </>
     )
}
export default NotesForm