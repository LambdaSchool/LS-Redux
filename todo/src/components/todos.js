import React from 'react';
import { connect } from 'react-redux'; // HOC!!!!
import { addTodo, deleteTodo, setCompleted } from '../actions';

class TODOS extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ''
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };


  handleNewTodo = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.todoText);
  };

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <div key={index}>
            <h3 onClick={() => this.props.setCompleted(index)}>
              {todo.todo}
            </h3>
          </div>
        ))}
        <input
          type="text"
          name="todoText"
          onChange={this.handleChanges}
          placeholder="New Todo"
          value={this.state.todoText}
        />
        <button onClick={this.handleNewTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    
  };
};

export default connect(
  mapStateToProps,
  { addTodo, setCompleted, deleteTodo }
)(TODOS);