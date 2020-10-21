  import React, { Component, useState } from 'react';
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

    randomOrderHandler = () => {
      this.setState({
        nameColor: [
          {name: 'tset', color: 'orange'},
          {name: 'ooooow', color: 'red'},
        ]
      });
    }
    render () {
      return(
        <div className="App">
          <h1>This is the most awesome home page ever!</h1>
          <p>this is a paragraph tag</p>
          <button onClick={this.randomOrderHandler}>RANDOMIZER3000</button>
          <Person name={this.state.nameColor[0].name} color={this.state.nameColor[0].color}>THE CHILDRENS</Person>
          <Person name={this.state.nameColor[1].name} color={this.state.nameColor[1].color}>Hope this works</Person>
        </div>
        );
      } 
  //same as
  //return React.createElement('div', null, React.createElement('h1', null, 'This is using createElement'))
  }

export default App;
  