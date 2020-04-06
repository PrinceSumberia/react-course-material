import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ task: "", completed: false });
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={task} onChange={this.handleChange} />
        <button>Add Todo!</button>
      </form>
    );
  }
}
