import { ADDTODO, DELETETODOS } from './actions';

// The initial state of the todo list is just an empty string.
const initialState = {
    todos: []
}

// This reducer will either add a todo or delete the list of todos 
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO: 
            const newTodos = state.todos;
            console.log("newTodos", newTodos)
            return { ...state, todos: newTodos }
        // case DELETETODOS: 
        // return console.log('well hello there');
        default: return state;
    }
};

