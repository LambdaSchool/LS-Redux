// import { INCREMENT, DECREMENT } from '../actions';
import { Object } from "core-js";

export const initialState = {
  todoList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        todoList: action.payload
      });
    case "TOGGLECHECK":
      const todoListCopy = state.todoList.slice();

      let recopy = todoListCopy.map(element => {
        if (
          element.id.toString() === action.payload &&
          element.completed === false
        ) {
          element["completed"] = true;
        } else if (
          element.id.toString() === action.payload &&
          element.completed === true
        ) {
          element["completed"] = false;
        }

        return element;
      });
      return Object.assign({}, state, {
        todoList: recopy
      });
    case "REMOVECHECKED":
      const todoList = state.todoList.slice();
      const filtTodo = todoList.filter(element => {
        if (element.completed === false) {
          return true;
        } else {
          return false;
        }
      });
      return Object.assign({}, state, {
        todoList: filtTodo
      });
    default:
      return state;
  }
};
