// Actions
import { HANDLE_INPUT_CHANGE, HANDLE_SUBMIT, TOGGLE_COMPLETED, DELETE_ITEM } from '../actions/TodoActions';

export default (state, action) => {
	switch(action.type) {
		case HANDLE_INPUT_CHANGE: {
			return {...state, inputText: action.payload};
		} // end case HANDLE_INPUT_CHANGE

		case HANDLE_SUBMIT: {
			const newTodoList = [...state.todoList];
			
			newTodoList.push({
				value: action.payload,
				completed: false
			});

			return {
				...state, 
				todoList: newTodoList, 
				inputText: ''
			};
		} // end case HANDLE_SUBMIT

		case TOGGLE_COMPLETED: {
			const newTodoList = [...state.todoList];

			newTodoList[action.payload].completed = !newTodoList[action.payload].completed;

			return {...state, todoList: newTodoList};
		} // end case TOGGLE_COMPLETED

		case DELETE_ITEM: {
			const newTodoList = [...state.todoList];

			newTodoList.splice(action.payload, 1);

			return {...state, todoList: newTodoList};
		} // end case DELETE_ITEM

		default: {
			return state;
		} // end case default
	} // end switch(action.type)
};
