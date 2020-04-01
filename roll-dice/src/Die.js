import React, { Component } from "react";
import classNames from "classnames";
import "./Die.css";

export default class Die extends Component {
  render() {
    console.log(this.props.isRolling);
    let classes = classNames({
      Die,
      rolling: this.props.isRolling
    });
    return (
      <div className={classes}>
        <i className={`fas fa-dice-${this.props.number}`}></i>
      </div>
    );
  }
}
