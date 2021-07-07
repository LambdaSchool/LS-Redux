import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, value: action.input, completed: false }];
    case TOGGLE_TODO:
      return state.map(
        (todo, index) => (index === action.id ? { ...todo, completed: !todo.completed } : todo)
      );
    case DELETE_TODO:
      return state.filter((todo, index) => index !== action.id);
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
};

export default todos;
