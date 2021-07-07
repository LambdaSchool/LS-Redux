import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.todo,
      completed: false,
      id: new Date(),
    });
    this.setState({ todo: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="todo"
            type="text"
            value={this.state.todo}
            onChange={this.handleInputChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
