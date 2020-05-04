import React from 'react';
import '../App.css';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addTask(this.state.value)
    this.setState({
      value: '',
    })
  };

  render() {
    return (
      <form className='todo-form' onSubmit={this.submitForm}>
        <input
          placeholder='Add a task'
          type='text'
          name='value'
          value={this.state.value}
          onChange={this.onInputChange}
        />

        <button className='add'>Add</button>
      </form>
    )
  };
}

export default ToDoForm;