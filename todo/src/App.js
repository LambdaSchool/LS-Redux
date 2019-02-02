import React, { Component } from 'react';

import './App.css';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {connect} from "react-redux"

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            todos:[]
        }

    }

    addTodo =(value)=>{

        let newTodo ={
            todo:value,
            completed:false

        };
        this.setState(prev=>{
            return ({todos:[...prev.todos,newTodo]})
        })
    }

    render() {
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <TodoList/>
                <TodoInput/>



            </div>
        );
    }
}
function mapStateToProps(state){
    return{ title: state.title}
}

export default connect(mapStateToProps)(App)