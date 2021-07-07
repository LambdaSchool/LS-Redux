import React, { Component } from 'react';

class Todo extends Component {
  handleClick = () => {
    this.props.toggleCompleted(this.props.todo.id);
  };

  render() {
    return <div onClick={this.handleClick}>{this.props.todo.value}</div>;
  }
}

export default Todo;
