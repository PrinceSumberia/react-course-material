import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { name, imgSrc, randomX, randomY } = this.props;

    const styles = {
      transform: `translateX(${randomX}px) rotate(${randomY}deg) translate(-50%, -50%)`,
    };
    return <img className="Card" src={imgSrc} alt={name} style={styles} />;
  }
}
