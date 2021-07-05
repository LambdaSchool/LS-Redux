import React, { Fragment } from 'react';


function Todo(props) {
    return (
      <Fragment>
       {props.todos.map(todo => {
        return <li key={todo.id} onClick={()=> props.toggleCompleted(todo.id)} style={{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.value}</li>        
      })}
      </Fragment>
    ) 
}

export default Todo;