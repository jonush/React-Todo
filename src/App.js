import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const tasks = [
  {
    task: 'React-Todo Project',
    id: 1581269332200,
    completed: false,
  },
  {
    task: 'Standup Meeting',
    id: 1588623432200,
    completed: false,
  },
]

let date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
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

    const taskList = [...this.state.tasks];
    taskList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    localStorage.setItem('newTask', '');
  };

  toggleTask = toggle => {
    console.log(toggle)
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(toggle === task.id) {
          return {
            ...task,
            completed: !task.completed,
          }
        };
        return task;
      })
    })
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  };

  persistMethod = e => {
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch(e) {
          this.setState({ [key]: value })
        }
      }
    }
  }

  componentDidMount() {
    this.persistMethod();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }

  saveStateToLocalStorage() {
    for (let key in  this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  render() {
    return (
      <div className='todo-app'>
        <h1>To Do App</h1>
        <h2 className='date'>{date}</h2>
        <h2 className='todo-title' >Tasks</h2>

        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />

        <TodoForm addTask={this.addTask} />
      </div>
    );
  };
}

export default App;
