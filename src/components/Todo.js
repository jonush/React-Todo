import React from 'react';

const Todo = props => {
  return (
    <div>
      <h2>{props.task.task}</h2>
    </div>
  )
}

export default Todo;