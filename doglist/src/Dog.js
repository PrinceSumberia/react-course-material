import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dog extends Component {
  render() {
    const { src, name, age, facts } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={src} alt={name} />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h4 className="card-subtitle my-2 text-muted">Age: {age}</h4>
        </div>
        <ul className="list-group list-group-flush">
          {facts.map((fact, i) => (
            <li className="list-group-item" key={i}>
              {fact}
            </li>
          ))}
        </ul>
        <Link className="btn btn-secondary" to="/">
          Go Back
        </Link>
      </div>
    );
  }
}
