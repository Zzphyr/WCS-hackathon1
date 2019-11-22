import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './Home';
import Landing from './Landing';
import Signup from './Signup';
import Profile from './Profile';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      userInfo: {},
      chosenOne: {},
      settings: {
        species: [{value: 'human', label: 'Human'}],
        genders: [{value: 'female', label: 'Female'},{value: 'male', label: 'Male'}],
        homeworlds: [{value: 'tatooine', label: 'Tatooine'}],
      },
    }
  }

  componentDidMount() {
    this.getPeople();
  }

  // Fetch character list from API
  getPeople = () => {
    fetch('https://melroune.github.io/starwars-api/api/all.json')
      .then(response => response.json())
      .then(data => {
        this.setState( 
          state => ({
          ...state,
          people: data 
          })
        )
      })
  }

  handleChosenOne = (chosenOne) => {
    this.setState(      
      state => ({
          ...state,
          chosenOne : chosenOne,
      }), 
      () => this.props.history.push('/profile')
    )
  }

  handleFilterChange = (values, option) => {
    this.setState({
      
      settings: {
        ...this.state.settings,
        [option] : values,   
      },
    })
  }


  render() {
    const { people, userInfo, chosenOne, settings } = this.state;
    return (
      <Fragment>
          <Switch>
            <Route 
              exact path="/" 
              component={Landing} 
              />
            <Route 
              path="/signup"
              render = {() => (
                <Signup
                  userInfo={userInfo}
                />
              )}
            />
            <Route 
              path="/home" 
              render = {() => (
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
              render = {() => (
                <Profile
                  chosenOne={chosenOne}
                />
              )}
            />
          </Switch>
      </Fragment >
    )
  }
}

export default withRouter(App);

