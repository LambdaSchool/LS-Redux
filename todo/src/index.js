import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import todos from './reducers'

const allReducers = combineReducers({
  todos
})

const initialState = {}

const allEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  allReducers,
  initialState,
  allEnhancers
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
