import React from 'react';

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
      <form onSubmit={this.submitForm}>
        <input 
          type='text'
          name='value'
          value={this.state.value}
          onChange={this.onInputChange}
        />

        <button>Add Task</button>
      </form>
    )
  };
}

export default ToDoForm;