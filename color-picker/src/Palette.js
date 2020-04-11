import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { palette } = this.props;
    const { level, format } = this.state;
    const colorboxes = palette.colors[level].map((color) => (
      <ColorBox key={color.name} background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">{colorboxes}</div>
        {/* footer */}
      </div>
    );
  }
}
