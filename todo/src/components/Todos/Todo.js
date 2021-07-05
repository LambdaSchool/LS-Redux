import React from 'react';
import { toggleTodo, deleteTodo } from './../actions';

import { connect } from 'react-redux';

const Todo = props => {
  return (
    <div 
      onClick={() => {props.toggleTodo(props.todo.id)}}
      className={`todo ${props.todo.complete ? "completed" : null}`}
    >
      <div>
        {props.todo.text} 
      </div>
      <div onClick={() => {props.deleteTodo(props.todo.id)}} className="cross">X</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(Todo);