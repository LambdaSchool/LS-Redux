import { ADD_TODO, TOGGLE_MEMBER } from '../actions'

const initialState = {
  todos: [
   { todo: 'Walk the dog', completed: false },
   { todo: 'Make Shopping', completed: false }
  ]
 }
 

export const reducer = (state = initialState, action) => {
  //console.log("did the action make it to the reducer????");
  switch(action.type) {
    case ADD_TODO:
      const newTodo = { todo: action.payload, completed: false }
      return {
        ...state,
        todos: [ ...state.todos, newTodo ]
      }

      case TOGGLE_MEMBER:
        return {
          ...state,
          todos: state.todos.map((todo, index) => {
             if(action.payload === index) {
               return {
                 ...todo,
                 completed: !todo.completed
               }
             } else {
               return todo
             }
          })
        }

      default:
        return state
  }
}

   

