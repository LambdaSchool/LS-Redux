import { ADDTODO, TOGGLETODO } from '../actions';

const initialState = {
    todos: [
        {id: 0,
        text: '',
        completed: false}
    ],
};

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDTODO: 
        return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
        case TOGGLETODO:
            console.log("firing")
            return state.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo;
                } else return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default: 
            return state;
    }
}   