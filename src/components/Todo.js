import React from 'react';
import './Todo.css';

const Todo = props => {
  const toggler = () => {
    return {
      textDecoration: props.task.completed ? 'line-through' : 'none',
      color: props.task.completed ? 'slategrey' : 'black',
    }
  }

  const onClickHandler = () => {
    props.toggleTask(props.task.id);
    console.log('Clicked');
  }

  return (
    <div className='todo-item'>
      <h2
        className='task'
        style={toggler()}
        onClick={onClickHandler}
      >{props.task.task}</h2>
    </div>
  )
}

export default Todo;