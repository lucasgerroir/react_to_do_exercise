import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.css";
import { TodoList } from "./TodoList";
import root from '../reducers'

const store = createStore(root, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
