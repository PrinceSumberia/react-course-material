import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };
  constructor(props) {
    super(props);

    this.state = {
      currentCoin: null,
      numHeads: 0,
      numTails: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const currentCoin = this.props.coins[
      Math.floor(Math.random() * this.props.coins.length)
    ];
    this.setState(st => ({
      currentCoin: currentCoin,
      numHeads: currentCoin.side === "heads" ? st.numHeads + 1 : st.numHeads,
      numTails: currentCoin.side === "tails" ? st.numTails + 1 : st.numTails
    }));
  }

  render() {
    const { currentCoin, numHeads, numTails } = this.state;
    const totalFlips = numHeads + numTails;
    return (
      <div>
        <h2>Lets Flip The Coin!</h2>
        {this.state.currentCoin && <Coin currentCoin={currentCoin} />}
        <button onClick={this.handleChange}>Flip Coin!</button>
        <p>
          Out of {totalFlips} flips, there are {numHeads} heads and {numTails}{" "}
          tails.
        </p>
      </div>
    );
  }
}
