import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }

  render() {
    const { name, imgSrc } = this.props;

    const styles = {
      transform: this._transform,
    };
    return <img className="Card" src={imgSrc} alt={name} style={styles} />;
  }
}
