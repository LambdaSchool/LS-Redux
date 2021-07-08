import React, { Component } from 'react';
import ToDoList from './components/ToDoList'

import { connect } from 'react-redux';
import { addToDos, toggleCompleted, deleteToDo } from './actions'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      aToDo: '',
      idCount: 2
    }
  }
 

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addToDos = (e) => {
    e.preventDefault()
    const toAdd = {
      todo: this.state.aToDo,
      completed: false,
      id: this.state.idCount
    }
    this.props.addToDos(toAdd);
    this.setState({ aToDo: '', idCount: this.state.idCount + 1})
    // console.log('test on click')
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.addToDos}>
          <input 
            onChange={this.handleInputChange}
            placeholder="Type ToDo"
            value={this.state.aToDo}
            name="aToDo"
          />
          <button type="summit">Submit</button>          
        </form>        
        <ToDoList list={this.props}/>
      </div>
    );
  }
}



const mapStateToProps = state => {
  
  return {
    toDos: state,
    
  }
}
export default connect(mapStateToProps, { addToDos, toggleCompleted, deleteToDo })(App);
