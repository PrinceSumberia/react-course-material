import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

export default class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4,
        name: "Charmander",
        type: "fire",
        base_experience: 62
      },
      {
        id: 7,
        name: "Squirtle",
        type: "water",
        base_experience: 63
      },
      {
        id: 11,
        name: "Metapod",
        type: "bug",
        base_experience: 72
      },
      {
        id: 12,
        name: "Butterfree",
        type: "flying",
        base_experience: 178
      },
      {
        id: 25,
        name: "Pikachu",
        type: "electric",
        base_experience: 112
      },
      {
        id: 39,
        name: "Jigglypuff",
        type: "normal",
        base_experience: 95
      },
      {
        id: 94,
        name: "Gengar",
        type: "poison",
        base_experience: 225
      },
      {
        id: 133,
        name: "Eevee",
        type: "normal",
        base_experience: 65
      }
    ]
  };
  render() {
    const player1 = [...this.props.pokemon];
    const player2 = [];
    while (player1.length > player2.length) {
      const randIndex = Math.floor(Math.random() * player1.length);
      player2.push(player1[randIndex]);
      player1.splice(randIndex, 1);
    }
    let totalExpPlayer1 = player1.reduce(
      (total, currentValue) => total + currentValue.base_experience,
      0
    );
    let totalExpPlayer2 = player2.reduce(
      (total, currentValue) => total + currentValue.base_experience,
      0
    );

    return (
      <div className="Pokegame">
        <Pokedex
          pokemon={player1}
          isWinner={totalExpPlayer1 > totalExpPlayer2}
          totalExp={totalExpPlayer1}
        />
        <Pokedex
          pokemon={player2}
          isWinner={totalExpPlayer1 < totalExpPlayer2}
          totalExp={totalExpPlayer2}
        />
      </div>
    );
  }
}
