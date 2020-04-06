import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = { ...todo, id: uuid() };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
    ));
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
