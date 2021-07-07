import React from 'react'
import './Todos.css'

const Todos = (props) => {
  const items = props.todos.map(item => item)
  return (
    <div>
      <h2>Todos Component</h2>
      <ul>
        { 
          items.map((todo, id)  =>{
            return (
              <li
                className={`todo-item ${todo.completed ? 'lineThrough' : ''}`}
                key={`todo-${todo.id}`}
                onClick={() => props.toggleTodo(id)}
                // onClick={() => props.toggleTodo(todo.id)}, USING THE TODO'S ID
                // style={{textDecoration: todo.completed ? 'line-through' : 'none'}}, USING INLINE STYLES
              >
                {todo.value}
                <button
                  onClick={() => props.deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todos
