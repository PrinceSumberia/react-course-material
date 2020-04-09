import React from "react";
import "./App.css";
import VendingMachine from "./VendingMachine";
import { Switch, Route, NavLink } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName="nav-active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="nav-active" to="/chips">
          Chips
        </NavLink>
        <NavLink exact activeClassName="nav-active" to="/soda">
          Soda
        </NavLink>
        <NavLink exact activeClassName="nav-active" to="/sardines">
          Sardines
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
      </Switch>
    </div>
  );
}

export default App;
