import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'all'
    }
  }

  toggleShow = tab => {
    this.setState({ show: tab })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-tabs">
          <h2 onClick={() => this.toggleShow('all')} className={this.state.show === 'all' ? 'selected' : null} >All</h2>
          <h2 onClick={() => this.toggleShow(true)} className={this.state.show === true ? 'selected' : null} >Completed</h2>
          <h2 onClick={() => this.toggleShow(false)} className={this.state.show === false ? 'selected' : null} >Unfinished</h2>
        </div>
        <div className="todo-list">
          {this.state.show === 'all' ? 
            this.props.todos
              .map(todo => (
                <Todo key={todo.id} todo={todo} /> 
            )) : 
            this.props.todos
              .filter(todo => todo.complete === this.state.show)
              .map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    todos: state,
  }
}

export default connect(mapStateToProps)(TodoList);