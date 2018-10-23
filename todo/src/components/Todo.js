import React from 'react';

import './StyledComponents.css';

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <li
            className="hvr-grow"
            key={todo.id}
            onClick={() => props.toggleCompleted(todo.id)}
          >
            {todo.value}
            <button className="delete-button">Delete</button>
          </li>
        );
      })}
    </div>
  );
}

export default Todo;
