export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisbilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

//initializing todo id
const initId = 0

//addTodo Action creator
export const addTodo = text => ({
    type : 'ADD_TODO',
    id : initId++,
    text,
    completed : false
})

//toggleTodo action creator
export const toggleTodo = id => ({
    type : 'TOGGLE_TODO',
    id,

})

//visibilility action creator
export const setVisibilityFilter = filter => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})

