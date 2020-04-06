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
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = { ...todo, id: uuid() };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  completeTodo(id) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = { ...todo, completed: !todo.completed };
        return newTodo;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        removeTodo={this.removeTodo}
        completeTodo={this.completeTodo}
      />
    ));
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        {todos}
      </div>
    );
  }
}
