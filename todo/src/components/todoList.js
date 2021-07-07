import React from 'react';
import { connect } from 'react-redux';

import Todo from './todo';
import styles from './todoList.module.css';

const TodoList = ({ todos }) => (
  <ul className={styles.list}>
    {todos.map((todo, index) => (
      <Todo key={index} id={index} todo={todo} />
    ))}
  </ul>
);

const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
