// Task and TaskList will be stateless functional components, introduced in React
// v0.14. They don’t have access to lifecycle methods such as componentDidMount, only
// accept props, don’t use this.state or this.setState, and they’re defined as plain
// functions instead of with createReactClass or ES2015 classes

import React from 'react'

const Task = props => {
    return (
        <div className="task">
        <div className="task-header">
        <div>{props.task.title}</div>
        </div>
        <hr />
        <div className="task-body">{props.task.description}
        </div>
        </div>
    );
}

export default Task;