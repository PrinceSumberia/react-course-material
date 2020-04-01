import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    textNumber: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      randNumOne: "one",
      randNumTwo: "two",
      isRolling: false
    };
    this.genRandomNumber = this.genRandomNumber.bind(this);
  }
  genRandomNumber() {
    this.setState({
      randNumOne: this.props.textNumber[Math.floor(Math.random() * 6)],
      randNumTwo: this.props.textNumber[Math.floor(Math.random() * 6)],
      isRolling: true
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <Die number={this.state.randNumOne} isRolling={this.state.isRolling} />
        <Die number={this.state.randNumTwo} isRolling={this.state.isRolling} />
        <button
          onClick={this.genRandomNumber}
          disabled={this.state.isRolling}
          className={
            this.state.isRolling
              ? "RollDice-btn-active RollDice-btn"
              : "RollDice-btn"
          }
        >
          {this.state.isRolling ? "Rolling...." : "Roll Dice"}
        </button>
      </div>
    );
  }
}
