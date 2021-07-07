import { ADDTODO, TOGGLETODO, DELETETODO } from '../';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (todos = [{value: "test", completed: false}], action) => {
  switch (action.type) {
    case ADDTODO:
      todos.push({
         value : action.value,
         completed : false,
      });
      return [...todos];
    case TOGGLETODO:
      //toggles the boolean for item complete to trigger style in App.js
      if(todos[action.index])todos[action.index].completed = !todos[action.index].completed;
      return [...todos];
    case DELETETODO:
      //delete function
      todos.splice(action.index,1);
      return [...todos];
    default:
      return [...todos];
  }

};
