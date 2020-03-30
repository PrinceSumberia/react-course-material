import React, { Component } from "react";

export default class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    // const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const updatedId = ("0000" + id).slice(-3);
    console.log(updatedId);
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${updatedId}.png`;
    return (
      <div>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <p>{type}</p>
        <p>{base_experience}</p>
      </div>
    );
  }
}
