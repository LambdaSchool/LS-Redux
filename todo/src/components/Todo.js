import React from 'react'
import { toggleTodo } from '../store/actions';
import { connect } from 'react-redux';

const Todo = ({ todo }) => {
    const toggleTodoComplete = (event) => {
      console.log(todo.completed)
      toggleTodo(todo.completed)
      console.log(todo.completed)  
    }

    return (<div onClick={toggleTodoComplete}>
                {todo.text}
            </div>
    )
}

export default connect(null, { toggleTodo })(Todo)
