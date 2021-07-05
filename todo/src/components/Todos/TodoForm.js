import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from './../actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ todoText: e.target.value })
  }

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText: '' })
  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={(e) => {this.addTodo(e)}}>
          <input 
            onChange={this.handleInputChange} 
            type="text" 
            value={this.state.todoText}>
          </input>
          <button type="submit">Add Todo!</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);