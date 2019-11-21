import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Card from './Landing';
import Profile from './Profile';

import './App.scss';

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
    const { people } = this.state;
    console.log(people)
    return (
      <div>

        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'></div>

        <BrowserRouter>
          <Switch>
            <Route 
              exact path="/" 
              component={Card} 
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

