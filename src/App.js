import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'test', color: 'blue'},
      {name: 'wooooo', color: 'green'},
    ]
  }

  randomOrderHandler = () => {
    //console.log("Button was clicked");
    this.setState({
      persons: [
        {name: 'IT CHANGED!!!', color: 'red'},
        {name: 'wooooo', color: 'green'},
      ]
    })
  }

  render() {
    return(
      <div className="App">
        <h1>This is the most awesome home page ever!</h1>
        <p>this is a paragraph tag</p>
        <button onClick={this.randomOrderHandler}>RANDOMIZER3000</button>
        <Person name={this.state.persons[0].name} color={this.state.persons[0].color}>THE CHILDRENS</Person>
        <Person name={this.state.persons[1].name} color={this.state.persons[1].color}>Hope this works</Person>
      </div>
    );
  } 
  //same as
  //return React.createElement('div', null, React.createElement('h1', null, 'This is using createElement'))
}


export default App;
