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
      chosenOne: {}
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

  handleUserChoice = (chosenOne) => {
    this.setState(      
      state => ({
          ...state,
          chosenOne : chosenOne,
      }), 
      () => this.props.history.push('/profile')
    )
  }

  render() {
    const { people, userInfo, chosenOne } = this.state;
    //console.log(people)
    //console.log("App chosenOne", chosenOne)
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
                  getUserChoice={this.handleUserChoice}
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

