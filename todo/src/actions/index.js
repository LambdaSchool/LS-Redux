export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

let nextTodoId = 1;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    payload: text
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const removeCompleted = state => {
  return {
    type: REMOVE_COMPLETED,
    payload: state
  };
};
