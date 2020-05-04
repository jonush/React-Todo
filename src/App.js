import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'React-Todo Project',
    id: 1209324,
    completed: false,
  },
  {
    task: 'Standup Meeting',
    id: 1395730,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = toggle => {
    
  };

  clearTasks = () => {

  };

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>

        <TodoForm addTask={this.addTask} />

        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTasks}
          clearTasks={this.clearTasks}
        />
      </div>
    );
  };
}

export default App;
