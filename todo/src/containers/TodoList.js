import React, { Component } from "react";
import Form from "../components/Form";
// import Todo from "../components/Todo";
import styled from "styled-components";
import { toggleCompleted, deleteTodo, removeCompleted } from "../actions";
import { connect } from "react-redux";

// ============================
// =======   STYLES  ==========
// ============================

const Div = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 40px;
  background: slateblue;
  border-radius: 5px;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3);
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

const Li = styled.li`
  position: relative;
  padding: 10px 0;
  background: pink;
  color: white;
  width: 90%;
  color: #939;
  margin: 0 auto 20px;
  margin-left: 26px;
`;

const Delete = styled.p`
  position: absolute;
  top: -16px;
  right: -20px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  background: white;
  color: red;
  transition: all 0.3s ease-in;

  &:hover {
    color: white;
    background: red;
  }
`;

const Button = styled.button`
  background: #909;
  font-size: 16px;
  padding: 10px 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  outline: none;
`;

// ============================
// =======  COMPONENT =========
// ============================
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
  }

  handleClick = id => {
    this.props.toggleCompleted(id);
  };

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleRemoveCompleted = () => {
    this.props.removeCompleted(this.state.todos);
  };

  render() {
    return (
      <Div>
        <Form />
        <Ul>
          {this.props.todos.map((todo, index) => (
            <Li
              key={index}
              onClick={() => this.handleClick(index)}
              completed={todo.completed}
              style={{
                textDecoration:
                  todo.completed === true ? "line-through" : "none"
              }}
            >
              {todo.text}
              <Delete onClick={() => this.handleDelete(todo.id)}>X</Delete>
            </Li>
          ))}
        </Ul>
        <Button onClick={() => this.handleRemoveCompleted()}>
          Clear&nbsp;Completed&nbsp;Todos
        </Button>
      </Div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

const mapDispatchToProps = dispatch => ({
  toggleCompleted: id => dispatch(toggleCompleted(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  removeCompleted: state => dispatch(removeCompleted(state.todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
