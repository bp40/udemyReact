import React from 'react';
import './Person.css';

const person = (props) => {
return (<div className='Person'>
            <h3 onClick={props.click}>This is a random number {Math.floor(Math.random() * 20)}</h3>
            <p>{props.children}</p>
            <p><strong>The name is : {props.name}, and color is {props.color}</strong></p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person;