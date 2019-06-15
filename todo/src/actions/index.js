export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodoAction = todo => {
  return {
    type: ADD_TODO,
    todo,
  }
}
export const removeTodoAction = id => {
  return {
    type: REMOVE_TODO,
    id,
  }
}
export const toggleTodoAction = id => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}
