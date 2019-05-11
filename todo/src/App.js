import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import ToDo from './todo/todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [{}]
    };
  }

  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedList: state.savedList
  };
};

const mapDispatchToProps = () => {
  return {
    addToDo,
    updateToDo
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);