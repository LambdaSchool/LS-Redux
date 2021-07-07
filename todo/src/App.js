import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions/TodoActions';
import './App.css';

class App extends Component {
  handleNewTodo = event => {
    event.preventDefault();
    if (this.refs.newTodo.value !== '')
      this.props.addTodo(this.refs.newTodo.value);
    this.refs.newTodo.value = '';
  };

  render() {
    return (
      <div>
        <div className="listOfTodos">
          <h2>To Do List</h2>
          <ol className="card">
            {this.props.todos.map((object, index) => (
              <li
                key={index}
                style={
                  object.completed
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }
                }
                onClick={() => this.props.toggleTodo(index)}
              >
                {object.value}

                <button
                  className="deleteButton"
                  onClick={() => this.props.deleteTodo(index)}
                >
                  <span> X </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="todoInput">
          <input type="text" ref="newTodo" />
          <button onClick={this.handleNewTodo}> Add Todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(
  App
);
