import React, { Component } from "react";
import "./AlphaButtons.css";

export default class AphaButtons extends Component {
  handleClick = (evt) => {
    this.props.handleGuess(evt);
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.props.disabled}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}
