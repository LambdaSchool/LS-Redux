import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import { addNewTodos } from './store/actions';

function App({ addNewTodos }) {
const [state, setState] = useState({text: ''})

const addTodos = () => {
  const todos = {
    id: Date.now(),
    text: state.text,
    completed: false
  }
  addNewTodos(todos)
  setState({
    text: ''
  })
}

const handleChanges = (event) => {
  setState({
    text: event.target.value
  })
}

  return (
    <div className="App">
      <TodoList />
      <input name="todos" value={state.text} onChange={handleChanges} />
      <button onClick={addTodos}>Add Todo</button>
    </div>
  );
}

export default connect(null, { addNewTodos })(App);
