import React, { Component } from "react";

export default class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div>
        <h3>{name}</h3>
        <img src={img} />
        <p>{type}</p>
        <p>{base_experience}</p>
      </div>
    );
  }
}
