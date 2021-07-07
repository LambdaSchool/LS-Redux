import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearCompleted } from '../actions';

import { ReactComponent as TrashCan } from '../assets/svgs/trash-2.svg';
import styles from './todoForm.module.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  submitTodo = e => {
    e.preventDefault();
    this.props.dispatch(addTodo(this.state.input));
    this.setState({ input: '' });
  };

  handleChange = e => this.setState({ input: e.target.value });

  filterTodos = () => {
    this.props.dispatch(clearCompleted());
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          placeholder="...todo"
          value={this.state.input}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Todo</button>
        <div className={styles.trash} onClick={this.filterTodos}>
          <TrashCan />
        </div>
      </form>
    );
  }
}

export default connect()(TodoForm);
