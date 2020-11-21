import './App.css';
import React from 'react';
import NotesContainer from "./containers/NotesContainer.js";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Practice List</h1>
        <NotesContainer />
      </>
    )
  }
}

export default App;
