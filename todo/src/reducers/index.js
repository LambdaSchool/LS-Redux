import { ADD_TODO, TOOGLE_COMPLETED } from '../actions';

export const initialState = {
  todos: []
}

export function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos,
        { 
          id: action.id,  
          value: action.text,
          completed: false,
        }
      ]}
    
    case TOOGLE_COMPLETED:
      const newTodos = state.todos.map(todo => {
        console.log()
        if(todo.id === action.payload) {
          return {
              ...todo, 
              completed: !todo.completed
            }
        } else {
          return {...todo};
        }
      })
      return {todos: newTodos};
      // console.log({newTodos});

    default:
      return state;
  }
}