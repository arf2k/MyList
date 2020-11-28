import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NoteList from './NoteList.js'
import styled from 'styled-components'

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
  <div className="listContainer" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "space-evenly"}}>
     <div className="formDiv"  >
     <form className="noteForm" >
          <TextField id="outlined-basic" label="" onChange={changeHandler} value={note}/>
          <Button onClick={addNote} size="small" variant="outlined">Note It </Button>
     </form>
     </div>
     <div className="listdiv" >
     <NoteList addNotes={item}/>
     </div>
     </div>
     </>
     )
}
export default NotesForm


const ListFrame = styled.div`
border-color: red;
border-style: ridge;
border-width: 5px;
width: 500px;
height: 130px;
background-color: #343A40;
margin: 10px auto;
display: grid;
position: relative;


`