import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import { toggleTodo, addTodo } from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODOS LIST</h1>
        <Todos
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
        />
        <TodoForm 
          addTodo={this.props.addTodo}
          todos={this.props.todos}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
})

const mapActionsToProps = {
  addTodo,
  toggleTodo
}

export default connect(mapStateToProps, mapActionsToProps)(App)
