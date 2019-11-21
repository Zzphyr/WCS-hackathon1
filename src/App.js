import React from 'react';
import './App.css';

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
      .then (response => response.json())
      .then (data => {
        this.setState(
          {people: data}
        )
      })
    }
  
  render() {

    console.log(this.state.people)
    return (
      <div >
        
      </div>
    )
  }
}

export default App;
