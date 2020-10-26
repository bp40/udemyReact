import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    nameColor: [
      {name: 'test', color: 'blue'},
      {name: 'wooooo', color: 'green'},
    ],
      otherState: "if you have one"
    };

  randomOrderHandler = (newName) => { 
    this.setState({
      nameColor: [
        {name: newName, color: 'orange'},
        {name: 'ooooow', color: 'red'},
      ]
    });
  }

  nameChangeHandler = (event) => { //handles changing the name of the prop it is passed in
    this.setState({
      nameColor: [
        {name: 'test', color: 'orange'},
        {name: event.target.value, color: 'red'},
      ]
    });
  }

  render () {
    return(
      <div className="App">
        <h1>This is the most awesome home page ever!</h1>
        <p>this is a paragraph tag</p>
        {/* this arrow function : not the most efficent way to pass arguments */}
        <button onClick={() => this.randomOrderHandler('test!')}>RANDOMIZER3000</button>
        {/* bind is the other way to pass arguments */}
        <Person name={this.state.nameColor[0].name} color={this.state.nameColor[0].color} click={this.randomOrderHandler.bind(this, '!tset')}>THE CHILDRENS</Person>
        <Person name={this.state.nameColor[1].name} color={this.state.nameColor[1].color} change={this.nameChangeHandler}>Hope this works</Person>
      </div>
        );
      } 
  //same as
  //return React.createElement('div', null, React.createElement('h1', null, 'This is using createElement'))
  }

export default App;
  