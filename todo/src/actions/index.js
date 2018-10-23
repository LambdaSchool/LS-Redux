import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from './types';

export const addTodo = input => {
  return {
    type: ADD_TODO,
    input
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
