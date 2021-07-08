import { ADD_TODOS, TOGGLE_COMPLETED, DELETE_TODO } from '../actions'; 

const settingState = 
  [
    // {
    //   todo: 'do something',
    //   completed: false,
    //   id: 0
    // },
    // {
    //   todo: 'do something else',
    //   completed: false,
    //   id: 1
    // }
  ]


export const reducersForToDo = (state = settingState, action) => {
  switch (action.type) {
    case ADD_TODOS:      
      return state.concat(action.payload);

    case TOGGLE_COMPLETED:
      console.log(action.payload)
      return state.map(todo => {
        // todo.id === action.payload ? todo.completed = !todo.completed : todo;
        if(todo.id === action.payload){
          return Object.assign({}, todo, {completed: !todo.completed})
          ;
        }return todo;
      });

    case DELETE_TODO:
      console.log(action.payload)
      return state.filter(todo => { return todo.id !== action.payload});
    default:
      return state;
  }
};