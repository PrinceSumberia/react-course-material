import React, { Component } from "react";
import "./Pokecard.css";

export default class Pokecard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log("Playing");
    let audio;
    if (this.props.name === "Pikachu") {
      audio = new Audio("./audio.mp3");
    } else if (this.props.name === "Squirtle") {
      audio = new Audio("./Squirtle.mp3");
    }
    audio.play();
  };
  render() {
    const { id, name, type, base_experience } = this.props;
    const updatedId = ("0000" + id).slice(-3);
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${updatedId}.png`;
    return (
      <div className="Pokecard" onClick={this.handleClick}>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <p>{type}</p>
        <p>{base_experience}</p>
      </div>
    );
  }
}
