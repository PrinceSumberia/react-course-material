import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default class Dogs extends Component {
  render() {
    const renderDogs = this.props.dogs.map((dog) => (
      <div key={uuid()} className="col-sm my-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={dog.src} alt={dog.name} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 class="card-title">{dog.name}</h5>
          <Link className="btn btn-dark" to={`/dogs/${dog.name.toLowerCase()}`}>
            More Info
          </Link>
        </div>
      </div>
    ));
    return <div className="row">{renderDogs}</div>;
  }
}
