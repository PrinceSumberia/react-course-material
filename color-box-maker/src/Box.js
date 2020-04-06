import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { bgColor, width, height, id } = this.props;
    const style = {
      backgroundColor: bgColor,
      width: `${width}rem`,
      height: `${height}rem`,
    };
    const handleClick = () => {
      this.props.removeBox(id);
    };
    return <div style={style} onClick={handleClick}></div>;
  }
}
