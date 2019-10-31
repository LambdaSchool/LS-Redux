export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';

export const addNewTodos = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLETODO,
        payload: id
    }
}