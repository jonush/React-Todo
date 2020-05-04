import React from 'react';
import Todo from './Todo';
import '../App.css';

const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleTask={props.toggleTask}
        />
      ))}

      <button className='clear' onClick={props.clearCompleted}>Clear</button>
    </div>
  );
};

export default TodoList;