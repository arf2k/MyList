import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import NoteList from './NoteList.js';
import styled from 'styled-components';

function NotesForm(){
     
   const [note, setNote] = useState("")  
     const [item, setItem] = useState([])

     const changeHandler = (e) => {
          setNote(e.target.value)
     }

     const addNote = (e) => {
          e.preventDefault()
         if(note.length > 0) {
          setNote("")
          setItem([...item, note]) 
         } else {
     console.log( "I hate you")
          }
     }
          
     const deleteNote = (index) => {
          const newList = [...item]
          // const noteIndex = newList.findIndex(note => note.id === index.id)
          if (index > -1) {
               newList.splice(index, 1);
             } else {
               newList.push(index);
             }
          setItem(newList)
     }
 
      
     return(
          <>
  <div className="listContainer" style={{display: "flex"}}>
     <div className="formDiv"  >
     <form className="noteForm" >
          <Input onChange={changeHandler} value={note}/>
          <Button onClick={addNote} inverted color="red">Note It </Button>
     </form>
     </div>
   <ListFrame>
     <NoteList addNotes={item} deleteNote={deleteNote}/>
     </ListFrame>
          </div>
     </>
     )
}
export default NotesForm


const ListFrame = styled.div`
border-color: blue;
border-style: ridge;
border-width: 5px;
width: 500px;
height: 130px;
margin: 10px auto;
display: grid;
position: relative

`