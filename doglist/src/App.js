import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import Navbar from "./Navbar";

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
    {
      name: "Ismil",
      age: 5,
      src: whiskey,
      facts: [
        "Ismil loves eating popcorn.",
        "Ismil is a terrible guard dog.",
        "Ismil wants to cuddle with you!",
      ],
    },
    {
      name: "Tyso",
      age: 3,
      src: hazel,
      facts: [
        "Tyso has soooo much energy!",
        "Tyso is highly intelligent.",
        "Tyso loves people more than dogs.",
      ],
    },
    {
      name: "Swet",
      age: 4,
      src: tubby,
      facts: [
        "Swet is not the brightest dog",
        "Swet does not like walks or exercise.",
        "Swet loves eating food.",
      ],
    },
  ],
};

function App(props) {
  const getDog = (routeProps) => {
    const name = routeProps.match.params.name;
    const currentDog = props.dogs.find(
      (dog) => dog.name.toLowerCase() === name
    );

    return <Dog {...currentDog} />;
  };
  return (
    <div className="App">
      <Navbar dogs={props.dogs} />
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Dogs dogs={props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
