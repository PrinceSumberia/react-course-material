import React, { Component } from "react";

export default class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      number: Math.floor(Math.random() * this.props.maxNum) + 1
    });
  }
  render() {
    const button = <button onClick={this.handleChange}>Random Number</button>;
    return (
      <div>
        <h1>Number is: {this.state.number}</h1>
        {this.state.number === 7 ? "Winner" : button}
      </div>
    );
  }
}
