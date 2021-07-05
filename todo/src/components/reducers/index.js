import { ADD_TODO, TOGGLE_TODO, DELETE_TODO  } from "../actions";


const initialState = [];
let todoID = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          id: todoID++,
          complete: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
      )
    case DELETE_TODO:
        return state.filter(todo => todo.id !== action.payload)
    default:
      return state;
  }
}