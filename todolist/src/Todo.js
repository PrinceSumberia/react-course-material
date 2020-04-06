import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  handleClick = () => {
    this.props.removeTodo(this.props.id);
  };
  handleComplete = () => {
    this.props.completeTodo(this.props.id);
  };
  render() {
    return (
      <div className="Todo">
        <div
          className={this.props.completed ? "Todo-completed" : ""}
          onClick={this.handleComplete}
        >
          {this.props.task}
        </div>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}
