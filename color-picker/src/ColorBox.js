import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div
        className="ColorBox"
        style={{
          backgroundColor: background,
        }}
      >
        <span>{name}</span>
        <span>More</span>
      </div>
    );
  }
}
