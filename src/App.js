import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import Signup from './Signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
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

    console.log(this.state.people)
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route path exact="/" component={Landing} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Home" component={Home} />
          </Switch>
        </BrowserRouter>

      </div >
    )
  }
}

export default App;

