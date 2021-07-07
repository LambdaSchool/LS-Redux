import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = {
  todos: [
    {
      id: 1,
      value: "Code Challenge",
      completed: false
    },
    {
      id: 2,
      value: "Morning Standup",
      completed: false
    },
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case TOGGLE_TODO:
      // USING INDEX
      let toggleTodos = [...state.todos]
      toggleTodos[action.payload].completed=!toggleTodos[action.payload].completed
      return ({...state, todos:toggleTodos})

      // USING TODO ID
      // let toggleTodos = {...state}
      // return {
      //   ...state,
      //   todos: state.todos.map(todo => {
      //     if (todo.id === action.payload) {
      //       return {
      //         ...todo,
      //         completed: !todo.completed
      //       }
      //     }
      //     return todo
      //   })
      // }
      
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => (todo.id !== action.payload) ? todo : '')
      }

    default:
      return state
  }
}
