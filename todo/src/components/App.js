import React, { Component } from 'react';
import logo from './2.3.png';
import './App.css';
import { addTodo } from '../actions';
import TodoList from './TodoList.js';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        newTodo: ''
      };
      this.addTodo = this.addTodo.bind(this);
      this.updateNewTodo = this.updateNewTodo.bind(this);
    }
    
    addTodo(event) {
      event.preventDefault();
        this.props.addTodo({
          value: this.state.newTodo,
          complete: false
        });
        this.setState({
          newTodo: ''
      });
    }
    
    updateNewTodo(event) {
      this.setState({
        newTodo: event.target.value
      });
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Devinci Tech Solutions' Todo List</h1>
        </header>
        <br/>
        <form onSubmit={this.newTodo}>
          <input onChange={this.updateNewTodo} 
                placeholder="Add a todo" 
                value={this.state.newTodo}>
          </input>
          <button onClick={this.addTodo}>Submit</button>
        </form>
          <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect (mapStateToProps, { addTodo })(App);
