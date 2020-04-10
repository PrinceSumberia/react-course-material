import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { palette } = this.props;
    const { level } = this.state;
    const colorboxes = palette.colors[level].map((color) => (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={this.changeLevel}
        />
        {/* Navbar goes hetr */}
        <div className="Palette-colors">{colorboxes}</div>
        {/* footer */}
      </div>
    );
  }
}
