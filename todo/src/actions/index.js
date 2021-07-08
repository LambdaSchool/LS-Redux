export const ADD_TODOS = "ADD_TODOS";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";


export const addToDos = todo => {
  return {
    type: ADD_TODOS, 
    payload: todo,
  }
}

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  }
}

export const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}