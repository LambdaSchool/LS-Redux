import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTask, task } from '../actions'

class App extends Component {
  state = {todoItem: ''}
  handleChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value //=<input name="" value=.../>
    }) };

  handleCompletedChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    console.log("this.props.todoList:", this.props.todoList)
    return (
      <div className="App">
        <input type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleChange}/>
        <button onClick={() => this.props.addTask(this.state.todoItem)}>add todo</button>
        {/* list will go here . && means if firstClause(line19) is true then execute secondClause(line21)*/}
        {this.props.todoList.length > 0 
        && 
        this.props.todoList.map(item => 
          <ul 
            key={item.thingTodo}
            name="todoTask" 
            onClick={() => this.props.task(this.state.todoItem)}
           >
              {item.thingTodo}
           </ul>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state)
  return {
    todoList: state
  }
}

export default connect(mapStateToProps, { addTask, task })(App);