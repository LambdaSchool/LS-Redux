import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  REMOVE_COMPLETED
} from "../actions";

const initialState = {
  todos: [
    {
      id: 0,
      text: "First Todo",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = {
        todos: [
          ...state.todos,
          { id: action.id, text: action.payload, completed: false }
        ]
      });
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case REMOVE_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

export default reducer;
