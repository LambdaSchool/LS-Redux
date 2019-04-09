import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createGlobalStyle } from "styled-components";
import TodoList from "./containers/TodoList";

// ============================
// =======   STYLES  ==========
// ============================

const GlobalStyles = createGlobalStyle`
  body {
    text-align: center;
    background: #fef;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// ============================
// =======  COMPONENT =========
// ============================
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <div className="App">
          <TodoList />
        </div>
      </>
    );
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
