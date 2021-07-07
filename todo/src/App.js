import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/todoList';

const App = () => (
  <div className="App">
    <h1>Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
