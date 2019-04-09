import React from "react";
import styled from "styled-components";

// ============================
// =======   STYLES  ==========
// ============================

const Li = styled.li`
  padding: 10px 0;
  background: pink;
  color: white;
  width: 90%;
  color: #939;
  margin: auto;
`;

// ============================
// =======  COMPONENT =========
// ============================

const Todo = ({ toggleCompleted, completed, text, id }) => {
  return (
    <Li
      onClick={toggleCompleted}
      completed={completed}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </Li>
  );
};

export default Todo;
