let id = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    id: ++id,
    text: todo
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    id: id
  };
};
