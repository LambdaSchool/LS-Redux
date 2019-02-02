import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  // this method takes the value keyed in the input field and stores it in this.state.inputText above
   inputHandler = event => {
    this.setState({ inputText: event.target.value }); // updates inputText with text from input field
  };

  // this method takes the inputText string and passes it to createNewTodo in App to update the todos array
  handleSubmit = event => {
    event.preventDefault();
    //this.props.createTodo(this.state.inputText); // call method in App createNewTodo and pass it inputText
    //this.setState({ inputText: "" }); // reset input window to blank string
  };

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputText}
          placeholder="...todo"
          onChange={this.inputHandler}
        />
        <button type="submit">Add Todo</button>
        <button 
          type="button" 
          // onClick={this.props.clearCompleted}
          onClick={console.log(this.props)}
        >
        Clear Completed
        </button>
      </form>
    
    </div>
    );
  }
}

export default TodoForm;
