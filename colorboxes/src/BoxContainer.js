import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
  };
  constructor(props) {
    super(props);
    this.state = {
      allColors: ["purple", "magenta", "violet", "pink"],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  randomColor() {
    return this.state.allColors[
      Math.floor(Math.random() * this.state.allColors.length)
    ];
  }

  handleClick(e) {
    let clickedColor = e.target.style.backgroundColor;
    let newColors = [...this.state.allColors];
    newColors[newColors.indexOf(clickedColor)] = this.randomColor();
    this.setState({ allColors: newColors });
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map((box) => (
      <ColorBox color={this.randomColor()} handleClick={this.handleClick} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}
