import React from 'react';

const person = (props) => {
return (<div>
            <h3>This is a random number {Math.floor(Math.random() * 20)}</h3>
            <p>{props.children}</p>
            <p><strong>The name is : {props.name}, and color is {props.color}</strong></p>
        </div>
    )
}

export default person;