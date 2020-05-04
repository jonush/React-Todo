import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Todo key={task.id} task={task} />
      ))}

      <button>Clear Tasks</button>
    </div>
  );
};

export default TodoList;