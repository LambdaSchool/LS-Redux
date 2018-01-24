import { NEW_TODO, TOGGLE_COMPLETE } from "../Actions";

export default (todos = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return todos.concat(action.payload);
    case TOGGLE_COMPLETE:
      const newTodos = todos.slice(0);
      newTodos[action.payload].completed = !newTodos[action.payload].completed;
      return newTodos;
    default:
      return todos;
  }
};
