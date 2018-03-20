import React from 'react';

export default (props) => {
  const todos = props.todos.map ((todo, i) => <TodoItem todo={todo} key={i} index={i} />);
  return (
    <ul>
      {todos}
    </ul>
  );
};
