// TODO:: create some action creators

// input handler action takes in an input as a payload returns a HANDLE_INPUT action with a payload of input
export const handleInput = input => {
  return {
    type: 'HANDLE_INPUT',
    payload: input
  }
}

// add todo action returns a ADD_TODO action
export const addTodo = () => {
  return {
    type: 'ADD_TODO'
  }
}