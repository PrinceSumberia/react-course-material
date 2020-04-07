import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";

export default class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.fetchJoke();
  }

  handleClick() {
    this.setState({ loading: true }, this.fetchJoke);
  }

  async fetchJoke() {
    const arr = [...this.state.jokes];
    while (arr.length < this.state.jokes.length + 10) {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      const joke = response.data;
      if (arr.every((j) => j.id !== joke.id)) {
        arr.push(joke);
      }
    }
    this.setState({ jokes: arr, loading: false }, () =>
      window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          {/* <i className="far fa-8x fa-laugh fa-spin" /> */}
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }

    const jokes = this.state.jokes.map((joke) => (
      <Joke key={joke.id} id={joke.id} joke={joke.joke} />
    ));

    return (
      <div>
        <h1>The Jokes App</h1>
        <button onClick={this.handleClick}>Fetch Jokes</button>
        {jokes}
      </div>
    );
  }
}
