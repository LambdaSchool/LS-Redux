import React from 'react';
import { Card, CardBody,
  CardTitle, Button } from 'reactstrap';

const ToDoList = (props) => {
// console.log(props)
  return (
    <div className="row justify-content-center">
      {props.list.toDos.map(todo => (
      <Card className="col-3 m-2" key={todo.id}>
        <CardBody>
          <CardTitle 
            onClick={() => props.list.toggleCompleted(todo.id)}
            style={todo.completed ? {textDecoration:"line-through"} : {textDecoration:"none"}}
          >
            {todo.todo}
          </CardTitle>
          <Button onClick={() => props.list.deleteToDo(todo.id)}>remove</Button>
        </CardBody>
      </Card>
    ))}
    </div>
  )
}


export default ToDoList