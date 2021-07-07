import React from 'react';

import AddTodo from './containers/AddTodo';
import Todos from './containers/Todos';

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
