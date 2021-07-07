import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TOGGLE_COMPLETED:
      const completed = state.todos.map(todo => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };
        else return todo;
      });
      return { todos: completed };
    default:
      return state;
  }
};
