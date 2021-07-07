import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/Reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';
export const DELETETODO = 'DELETETODO';
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
