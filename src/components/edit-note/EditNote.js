import React, { useState } from "react";
import { connect } from "react-redux";
import { updateNote } from "../../redux/notes/notesActions";
import { Input, Button } from "semantic-ui-react";


const EditNote = () => {
     const [note, setNote] = useState("")

     const changeHandler = (e) => {
          setNote(e.target.value)
     }
     const handleUpdate = (e) => {
          e.preventDefault()
          updateNote(note)

     }




return (
     <div key={note.id} >
     <form className="updateForm">
     <Input type="text" placeholder="Add a note" onChange={changeHandler} value={note} />
     <Button onClick={handleUpdate} inverted color="red">
       Update{" "}
     </Button>
   </form>
   </div> 
)


}

const mapDispatchToProps = (dispatch) => ({
     updateNote: (id, newNote) => dispatch(updateNote(id, newNote)),
})

export default connect(null, mapDispatchToProps)(EditNote)