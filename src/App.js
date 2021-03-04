import './App.css';
import React from 'react';
import NotesContainer from "./containers/NotesContainer.js";
import NotesForm from './components/notes-form/NotesForm';
import NoteList from './components/note-list/NoteList';

class App extends React.Component {
  
  // componentDidMount() {
  //   fetch("functions/hidden-token")
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  // }
  
  
  
  render() {
    return (
      <>
        <h1>Practice List</h1>
      <NotesForm/>
      <NoteList/>
    
      </>
    )
  }
}

export default App;
