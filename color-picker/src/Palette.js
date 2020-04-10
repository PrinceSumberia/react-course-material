import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
  render() {
    const colorboxes = this.props.colors.map((color) => (
      <ColorBox key={color.name} background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes hetr */}
        <div className="Palette-colors">{colorboxes}</div>
        {/* footer */}
      </div>
    );
  }
}
