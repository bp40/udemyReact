import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    nameColor: [
      {name: 'test', color: 'blue'},
      {name: 'wooooo', color: 'green'},
    ],
      otherState: "if you have one",
      showPerson: false,
    };

    reverseOrderHandler = () => { 
    this.setState({
      nameColor: [
        {name: "tset", color: 'orange'},
        {name: 'ooooow', color: 'red'},
      ]
    });
  }

  togglePersonHandler = () => {
    const toggleStatus = !this.state.showPerson;
    this.setState({showPerson: toggleStatus});
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

    //inline styling
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div className="persons">
          <button onClick={this.reverseOrderHandler}>RANDOMIZER3000</button>
          <Person 
            name={this.state.nameColor[0].name} 
            color={this.state.nameColor[0].color}>
            THE CHILDRENS(of the object of course)
          </Person>
          <Person 
            name={this.state.nameColor[1].name} 
            changed={this.nameChangeHandler}
            color={this.state.nameColor[1].color}>
            Hope this works
          </Person>
        </div>
      );
    }

    return(
      <div className="App">
        <h1>This is the most awesome home page ever!</h1>
        <p>this is a paragraph tag</p>
        <button
          style={style} 
          onClick={this.togglePersonHandler}>
          Toggle
        </button>
        {persons}
      </div>
        );
      } 
  //same as
  //return React.createElement('div', null, React.createElement('h1', null, 'This is using createElement'))
 
}

export default App;
