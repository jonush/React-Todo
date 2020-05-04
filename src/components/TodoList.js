import React from 'react';
import Todo from './Todo';
import '../App.css';

const TodoList = props => {
  return (
    <div className='todo-list'>
      <h2 className='todo-title' >Tasks</h2> 
      
      {props.tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleTask={props.toggleTask}
        />
      ))}

      <button className='clear' onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;