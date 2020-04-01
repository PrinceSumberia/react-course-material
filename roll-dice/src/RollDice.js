import React, { Component } from "react";
import Die from "./Die";

export default class RollDice extends Component {
  static defaultProps = {
    textNumber: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      randNumOne: "one",
      randNumTwo: "two"
    };
    this.genRandomNumber = this.genRandomNumber.bind(this);
  }
  genRandomNumber() {
    this.setState({
      randNumOne: this.props.textNumber[Math.floor(Math.random() * 6)],
      randNumTwo: this.props.textNumber[Math.floor(Math.random() * 6)]
    });
  }
  render() {
    return (
      <div>
        <Die number={this.state.randNumOne} />
        <Die number={this.state.randNumTwo} />
        <button onClick={this.genRandomNumber}>Roll Dice</button>
      </div>
    );
  }
}
