export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = task => {
    return{
        type: DELETE_TODO,
        payload: task
    }
}

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    }
}