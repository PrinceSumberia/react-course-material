import React, { Component } from "react";
import "./Navbar.css";
import { withRouter, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const navLinks = this.props.dogs.map((dog, i) => (
      <NavLink
        key={i}
        activeClassName="Navbar-link-active"
        className="Navbar-link"
        exact
        to={`/dogs/${dog.name.toLowerCase()}`}
      >
        {dog.name}
      </NavLink>
    ));
    return (
      <div className="Navbar">
        <NavLink
          activeClassName="Navbar-link-active"
          className="Navbar-link"
          exact
          to="/"
        >
          Home
        </NavLink>
        {navLinks}
      </div>
    );
  }
}

export default withRouter(Navbar);
