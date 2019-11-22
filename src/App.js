import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./Home";
import Card from "./Landing";
import Profile from "./Profile";
import About from "./AboutUs";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      userInfo: {},
      chosenOne: {},
      settings: {
        species: [{ value: "human", label: "Human" }],
        genders: [
          { value: "female", label: "Female" },
          { value: "male", label: "Male" }
        ],
        homeworlds: [{ value: "tatooine", label: "Tatooine" }]
      }
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  // Fetch character list from API
  getPeople = () => {
    fetch("https://melroune.github.io/starwars-api/api/all.json")
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          people: data
        }));
      });
  };

  handleChosenOne = chosenOne => {
    this.setState(
      state => ({
        ...state,
        chosenOne: chosenOne
      }),
      () => this.props.history.push("/profile")
    );
  };

  handleFilterChange = (values, option) => {
    this.setState({
      settings: {
        ...this.state.settings,
        [option]: values
      }
    });
  };

  render() {
    const { people, userInfo, chosenOne, settings } = this.state;
    return (
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title"></div>

        <Switch>
          <Route exact path="/" component={Card} />
          )} />
          <Route
            path="/home"
            render={() => (
              <Home
                people={people}
                getUserChoice={this.handleChosenOne}
                onFilterChange={this.handleFilterChange}
                chosenSettings={settings}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile chosenOne={chosenOne} />}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
