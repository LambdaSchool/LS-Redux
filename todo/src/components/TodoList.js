import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <div>
            <h1>Todos</h1>
                {todos.map( (todo) => {
                    return <Todo todo={todo} key={todo.id} />
                })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)