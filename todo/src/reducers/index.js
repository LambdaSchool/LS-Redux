import { CREATE_TODO, TOGGLE_TODO } from "../actions";

export const todoReducer = (state = [], action)  => {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat(action.payload);
    case TOGGLE_TODO:
      return ;
    default:
      return state;
  }
};