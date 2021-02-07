import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    nameColor: [
      {id: '1',name: 'test', color: 'blue'},
      {id: '2',name: 'wooooo', color: 'green'},
    ],
      otherState: "if you have one",
      showPerson: false,
    };
    /* Deprecated
    reverseOrderHandler = () => { 
    this.setState({
      nameColor: [
        {name: "tset", color: 'orange'},
        {name: 'ooooow', color: 'red'},
      ]
    });
  }
  */
  
  togglePersonHandler = () => {
    const toggleStatus = !this.state.showPerson;
    this.setState({showPerson: toggleStatus});
  }
  
  //when editing state you should not mutate the state directly (Immutable)
  //create a copy and change that then update the state 
  deletePersonHandler = (nameIndex) => {
    // const names = this.state.nameColor.slice();  //.slice copies the array
    const names = [...this.state.nameColor]; //this is kinda modern but weird //jsspread operator 
    names.splice(nameIndex, 1); //removes 1 element from array 
    this.setState({nameColor: names});
  }
  
  //https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8091078#questions/8167356
  nameChangeHandler = (event, id) => { //handles changing the name of the prop it is passed in
    const nameColorIndex = this.state.nameColor.findIndex(currentNameColor => {
      return currentNameColor.id === id; //finds the nameColor with specified id
    });
    const copiedNameColor = {
      ...this.state.nameColor[nameColorIndex] 
      //Object.assign({}, this.state.nameColor[nameColorIndex]); also works
    }
    copiedNameColor.name = event.target.value;
    const copiedArrayNameColors = [...this.state.nameColor];
    copiedArrayNameColors[nameColorIndex] = copiedNameColor;
    
    this.setState({nameColor: copiedArrayNameColors});
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

          {this.state.nameColor.map((nameColor, index) => {
            return <Person
              key = {nameColor.id}
              click = {() => this.deletePersonHandler(index)}              
              //The other way is click = {this.deletePersonHandler.bind(this, index)}
              name = {nameColor.name}
              color = {nameColor.color}
              changed = {(event) => this.nameChangeHandler(event, nameColor.id)}/>
          })}
          {/*}   .map() replaces the need of this //DEPRECATED//
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
          {*/}
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
