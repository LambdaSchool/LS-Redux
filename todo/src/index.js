import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import todo from './reducers';


const store = createStore(todo);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
