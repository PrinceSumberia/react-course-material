import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

export default class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [],
    };
    this.createBox = this.createBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  createBox(newBox) {
    const newBoxWithID = { ...newBox, id: uuid() };
    this.setState({ boxes: [...this.state.boxes, newBoxWithID] });
  }

  removeBox(id) {
    const boxes = this.state.boxes.filter((box) => box.id !== id);
    this.setState({ boxes: boxes });
  }

  render() {
    const boxes = this.state.boxes.map(({ bgColor, width, height, id }) => (
      <Box
        key={uuid()}
        bgColor={bgColor}
        width={width}
        height={height}
        id={id}
        removeBox={this.removeBox}
      />
    ));
    return (
      <div>
        <NewBoxForm createBox={this.createBox} />
        {boxes}
      </div>
    );
  }
}
