import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';

import Todo from '../components/Todo';

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(Todos);
