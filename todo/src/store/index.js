import { createStore } from 'redux';
import { todosReducer } from './reducers';

export const store = createStore(todosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());