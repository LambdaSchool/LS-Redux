export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})