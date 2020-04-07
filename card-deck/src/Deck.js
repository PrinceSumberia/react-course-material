import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckId: "",
      cards: [],
      remaining: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async fetchCard() {
    const URL = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
    const response = await axios.get(URL);
    const data = response.data;
    const cards = data.cards[0];
    const card = {
      value: cards.value,
      code: cards.code,
      suit: cards.suit,
      image: cards.image,
      randomX: Math.floor(Math.random() * 30),
      randomY: Math.floor(Math.random() * 30),
    };
    this.setState((st) => ({
      cards: [...st.cards, card],
      remaining: data.remaining,
    }));
  }

  handleClick() {
    this.fetchCard();
  }

  async componentDidMount() {
    const URL = "https://deckofcardsapi.com/api/deck/new/shuffle";
    const response = await axios.get(URL);
    const data = response.data;
    this.setState({ deckId: data.deck_id });
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Card
        key={card.code}
        name={card.suit}
        imgSrc={card.image}
        randomX={card.randomX}
        randomY={card.randomY}
      />
    ));

    return (
      <div className="Deck">
        <h1>The Card Game</h1>
        <button onClick={this.handleClick}>Give Me a Card!</button>
        <div>{cards}</div>
      </div>
    );
  }
}
