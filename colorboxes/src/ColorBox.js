import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="ColorBox"
        onClick={this.props.handleClick}
      ></div>
    );
  }
}
