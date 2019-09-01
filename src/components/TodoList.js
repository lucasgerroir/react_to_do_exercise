import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./TodoList.css";
import { loadTodos, addTodo } from "../actions";

class TodoListBase extends Component { 

  componentWillMount() {
    // call to api get toDos
    this.props.loadTodos();
  }

  /* Add a to do */
  addTodo = () => {
    //check if input has been filled out
    if(!this.refs.newTodo.value || this.refs.newTodo.value === '') {
      return;
    }
    // add text to todo object incase we add further attributes
    const newToDo = {
      text: this.refs.newTodo.value
    } 
    // dispatches actions to add todo
    this.props.addTodo(newToDo);
    // set the input to empty
    this.refs.newTodo.value = "";
  };

  render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <h1>Hey Danny</h1>
            <h2>What's your plan today?</h2>
            <div className="add-todo">
              <input ref='newTodo'
                     placeholder="Add a task to do..." />
              <button  onClick={this.addTodo}> 
                <i className="fa fa-plus"></i> 
              </button>
            </div>
          </div>
          <div>
            <ol className="todoList">
              {this.props.todos.map((todo, i) => (
                <li className="card" 
                    key={i}>{todo}</li>
              ))}
            </ol>
          </div>
        </div>
      );
  }
}

 /* map redux state to component props */
const mapStateToProps = state => {
  return {
    todos: state.todos.list 
  }
};

 /* map redux actions to component props */
const mapDispatchToProps = dispatch => ({
  loadTodos: bindActionCreators(loadTodos, dispatch),
  addTodo: bindActionCreators(addTodo, dispatch)
});

 /* connect redux and react */
export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListBase);
