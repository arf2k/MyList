import React from "react";
import { List, Icon } from 'semantic-ui-react';
import { connect } from "react-redux";
import { getNoteById } from "../../redux/notes/notesSelector"

const NoteCard = () => (

//      const deleteHandler = ()
<List.Item  style={{marginLeft: "20px", marginTop: "5px"}} 
           <List.Icon style={{marginLeft: "15px"}} } name='trash alternate' /> 
        </List.Item>

)

const mapStateToProps = state => {
     note: 
}
export default connect()(NoteCard)