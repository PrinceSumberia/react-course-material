import React, { Component } from "react";
import classNames from "classnames";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    let classes = classNames({
      Pokedex,
      "Pokedex-winnerdeck": this.props.isWinner
    });
    return (
      <div className={classes}>
        {title}
        <h4>Total Experience: {this.props.totalExp}</h4>
        <div className="Pokedex-pokemon">
          {this.props.pokemon.map(p => (
            <Pokecard {...p} key={p.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
