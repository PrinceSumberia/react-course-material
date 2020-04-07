import React, { Component } from "react";

export default class Joke extends Component {
  render() {
    const { joke } = this.props;
    return (
      <div>
        <p>{joke}</p>
      </div>
    );
  }
}
