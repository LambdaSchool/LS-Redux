import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  todoReducer  from './reducers';

const store = createStore(todoReducer);


ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);

