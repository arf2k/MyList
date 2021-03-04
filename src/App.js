import './App.css';
import React from 'react';
import NotesContainer from "./containers/NotesContainer.js";

class App extends React.Component {
  
  componentDidMount() {
    fetch("functions/hidden-token")
    .then(response => response.json())
    .then(data => console.log(data));
  }
  
  
  
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
