import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

import { ReactComponent as TrashCan } from '../assets/svgs/trash-2.svg';
import styles from './todo.module.css';

const Todo = ({ dispatch, todo, id }) => (
  <li
    className={todo.completed ? styles.completed : styles.incomplete}
    onClick={() => dispatch(toggleTodo(id))}
  >
    <div className={styles.text}>{todo.value}</div>
    <div className={styles.trash} onClick={() => dispatch(deleteTodo(id))}>
      <TrashCan />
    </div>
  </li>
);

export default connect()(Todo);
