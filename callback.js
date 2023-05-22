// In React, a callback is a function that is passed as a parameter to another component or function, allowing the receiving component or function to invoke that callback at a later time. Callbacks are commonly used in React to handle asynchronous operations, events, or data updates.

// Here's an example of how callbacks can be used in React:

import React from 'react'

function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.text}

        </button>
    );
}

function App(){
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div>
            <h1>Callback example</h1>
            <Button onClick = {handleClick} text = 'Click me!'/>
        </div>
    )
}

export default App;