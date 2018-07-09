export const ADD_TODO = 'ADD_TODO';
export const TODO_INPUT = 'TODO_INPUT';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const todoInput = input => {
    return {
        type: TODO_INPUT,
        payload: input
    }
} 