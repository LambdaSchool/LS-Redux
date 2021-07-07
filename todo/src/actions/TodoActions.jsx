const ADDTODO = 'ADDTODO';
const TOGGLETODO = 'TOGGLETODO';
const DELETETODO = 'DELETETODO'

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const addTodo = (formdata) => {
  // Fill in this function
   console.log(formdata);
  return {
      type: ADDTODO,
      value: formdata,
    };
};

export const toggleTodo = (i) => {
  // Fill in this function

  return {
      type: TOGGLETODO,
      index: i,
   };
};

export const deleteTodo = (i) => {

   return {
      type: DELETETODO,
      index: i,
   }
}