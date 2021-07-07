import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: this.props.todos.length + 1,
      value: this.state.newTodo,
      completed: false
    }
    this.props.addTodo(newTodo)
    this.setState({ newTodo: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="newTodo"
            type="text"
            placeholder="New Todo"
            value={this.state.newTodo}
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm