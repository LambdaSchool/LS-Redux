import {
    HANDLE_INPUT,
    ADD_TODO,
    TOGGLE_COMPLETE,
    DELETE_TODO
  } from "../actions";
  
  const initialState = {
    todos: [],
    todo: ""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case HANDLE_INPUT:
        return { ...state, todo: action.payload };
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { value: action.payload, completed: false }],
          todo: ""
        };
      case TOGGLE_COMPLETE:
        console.log("reducer toggled");
        console.log(action.payload, action.value, action.id);
        let newTodos = state.todos.slice();
        newTodos.splice(action.id, 1, {
          value: action.value,
          completed: !action.payload
        });
        return { ...state, todos: newTodos };
      case DELETE_TODO:
        let deleteTodos = state.todos
          .slice()
          .filter((todo, i) => i !== action.payload);
        return { ...state, todos: deleteTodos };
      default:
        return state;
    }
  };