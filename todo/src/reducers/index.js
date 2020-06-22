import { ADDTODO_TASK, TOGGLE_COMPLETE } from '../actions';

const initialState = {
	tasks: [
		{
			task: 'Learn about Redux',
			complete: true
		},
		{
			task: 'Apply Redux to project',
			complete: false
		}
	]
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDTODO_TASK:
			return {
				...state,
				tasks: [ ...state.tasks, { task: action.payload, complete: false } ]
			};
		case TOGGLE_COMPLETE:
			return {
				...state,
				tasks: state.tasks.map(
					(task, index) => (index === action.payload ? { ...task, complete: !task.complete } : task)
				)
			};
		default:
			return state;
	}
};

export default todoReducer;
