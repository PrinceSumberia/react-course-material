import React, { PureComponent } from "react";
import "./Joke.css";

export default class Joke extends PureComponent {
  handleClick = (evt) => {
    this.props.handleVotes(evt.target.name, this.props.id);
  };

  emoji = (votes) => {
    if (votes >= 15) {
      return "🤣";
    } else if (votes >= 12) {
      return "😂";
    } else if (votes >= 9) {
      return "😅";
    } else if (votes >= 6) {
      return "😁";
    } else if (votes >= 3) {
      return "😀";
    } else if (votes >= 0) {
      return "🙂";
    } else {
      return "🤨";
    }
  };

  render() {
    const { joke, votes } = this.props;

    return (
      <div className="Joke">
        <button onClick={this.handleClick} name="upvote">
          &uarr;
        </button>
        <p className="votes">{votes}</p>
        <button onClick={this.handleClick} name="downvote">
          &darr;
        </button>
        <p className="Joke-text">{joke}</p>
        <span className="emoji">{this.emoji(votes)}</span>
      </div>
    );
  }
}
