import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personState, setPersonState ] = useState({
    persons: [
      {name: 'test', color: 'blue'},
      {name: 'wooooo', color: 'green'},
    ]
  });

  const randomOrderHandler = () => {
    //console.log("Button was clicked");
    setPersonState({
      persons: [
        {name: 'IT CHANGED!!!', color: 'red'},
        {name: 'wooooo', color: 'green'},
      ]
    })
  }
  
  return(
      <div className="App">
        <h1>This is the most awesome home page ever!</h1>
        <p>this is a paragraph tag</p>
        <button onClick={randomOrderHandler}>RANDOMIZER3000</button>
        <Person name={personState.persons[0].name} color={personState.persons[0].color}>THE CHILDRENS</Person>
        <Person name={personState.persons[1].name} color={personState.persons[1].color}>Hope this works</Person>
      </div>
    );
  } 
  //same as
  //return React.createElement('div', null, React.createElement('h1', null, 'This is using createElement'))

export default App;