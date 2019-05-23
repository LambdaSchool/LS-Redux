import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { add, toggleCheck, removedChecked } from "./actions/actions";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props) {
    super(props);
    this.state = {
      textBoxString: "",
      display: []
    };
  }
  writeToLS = (list) => {
    localStorage.setItem("taskList", JSON.stringify(list));
  };
  readLS = () => {
    let output = JSON.parse(localStorage.getItem("taskList"));
    console.log(output)
    this.props.addItem(output);
  };
  addToList = event => {
    if (this.state.textBoxString === "") {
      return;
    }
    const todoListCopy = this.props.todoList.slice();
    const inputBox = this.state.textBoxString;
    todoListCopy.push({
      task: inputBox,
      id: Date.now(),
      completed: false
    });
    document.getElementById("todoInput").value = "";

    this.props.addItem(todoListCopy);
   

    // this.setState(
    //   { todoList: todoListCopy, textBoxString: "", display: todoListCopy },
    //   () => {
    //     // this.writeToLS();
    //   }
    // );
  };

  clearComplete = () => {
    this.props.clearComplete();
    
    // const todoListCopy = this.state.todoList;
    // let recopy = todoListCopy.filter(element => {
    //   if (element.completed === false) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // this.setState({ todoList: recopy, display: recopy }, () => {
    //   // this.writeToLS();
    // });
  };

  complete = event => {
    this.props.toggle(event.target.id);
    
    // const todoListCopy = this.state.todoList;
    // // event.target.classList.toggle('complete');
    // let recopy = todoListCopy.map(element => {
    //   if (
    //     element.id.toString() === event.target.id &&
    //     element.completed === false
    //   ) {
    //     element["completed"] = true;
    //   } else if (
    //     element.id.toString() === event.target.id &&
    //     element.completed === true
    //   ) {
    //     element["completed"] = false;
    //   }

    //   return element;
    // });
    // this.setState({ todoList: recopy, display: recopy }, () => {
    //   // this.writeToLS();
    // });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.addToList();
    }

    this.setState({ textBoxString: event.target.value }, () => {
      this.search();
    });
  };
  componentDidMount() {
    document.title = "Hey Look a React Todo App";
    this.setState({ display: this.props.todoList }, () => {});

    if (localStorage.getItem("taskList") === null) {
      localStorage.setItem("taskList", "[]");
    } else {
      this.readLS();
    }
  }

  search() {
    const todoListCopy = this.props.todoList.slice();

    let recopy = todoListCopy.filter(x => {
      if (
        x.task.toLowerCase().includes(this.state.textBoxString.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
      // x.task.toLowerCase().includes(this.textBoxString.toLowerCase())
    });

    this.setState({ display: recopy }, () => {});
  }
  componentWillReceiveProps (nextProps) {
    this.writeToLS(nextProps.todoList );
    if (this.props.todoList !== nextProps.todoList ) {
      this.setState({ display: nextProps.todoList}, () => {});
    }

  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <h3>What you're putting off:</h3>
        <div className="todoListContainer">
          <TodoList methods={this.complete} array={this.state.display} />
        </div>
        <TodoForm
          methods={[this.addToList, this.handleKeyPress, this.clearComplete]}
        />
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(add(item)),
  toggle: ID => dispatch(toggleCheck(ID)),
  clearComplete: () => {dispatch(removedChecked())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
