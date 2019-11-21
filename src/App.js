import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          { people: data }
        )
      })
  }

  render() {
    const { people, userInfo } = this.state;
    console.log(people)
    return (
      <div >
        <BrowserRouter>
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
                />
              )}
            />
            <Route 
              path="/profile"
              render = {() => (
                <Profile
                  people={people}
                />
              )}
            />
          </Switch>
        </BrowserRouter>

      </div >
    )
  }
}

export default App;

