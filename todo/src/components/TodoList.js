import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { addTodo, toggleCompleted } from '../actions';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  onChange = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form>
          <input placeholder="Todo" value={this.state.inputValue} onChange={this.onChange}/>
          <button 
            type='submit' 
            onClick={(event)=> { 
              event.preventDefault(); 
              this.props.addTodo(this.state.inputValue);
              this.setState({inputValue: ''})
            }}
          >Add Todo</button>
        </form> 
        <ul>
          <Todo todos={this.props.todos} toggleCompleted={this.props.toggleCompleted} />   
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps,{ addTodo, toggleCompleted })(TodoList);