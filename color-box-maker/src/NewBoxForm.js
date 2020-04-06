import React, { Component } from "react";

export default class NeBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: "7",
      height: "7",
      bgColor: "#000000",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createBox({ ...this.state });
    this.setState({ width: "", height: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          name="width"
          placeholder="Width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="height"
          placeholder="height"
          value={this.state.height}
          onChange={this.handleChange}
        />

        <input
          type="color"
          name="bgColor"
          placeholder="BackGround Color"
          value={this.state.bgColor}
          onChange={this.handleChange}
        />
        <button>Add Box</button>
      </form>
    );
  }
}
