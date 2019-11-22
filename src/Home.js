import React from 'react';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';

import './Home.scss';
import './Home.css';
       
const Home = ({ people, getUserChoice, onFilterChange, chosenSettings }) => {

    let chosenGenders = [], chosenSpecies = [], chosenHomeworlds = [];
    chosenSettings.genders.forEach(el => {
        return chosenGenders.push(el["value"])
    })
     chosenSettings.homeworlds.forEach(el => {
        return chosenHomeworlds.push(el["value"])
    })
    chosenSettings.species.forEach(el => {
        return chosenSpecies.push(el["value"])
    }) 

    const filteredPeople = people.filter((person) =>  {
            return chosenGenders.includes(person.gender) && chosenSpecies.includes(person.species) && chosenHomeworlds.includes(person.homeworld) 
        })

    return (
      <main className="home-main">
        <h1 className="home-title">Select your target</h1>
        <h2 className="h2-about"><Link to="/about">About Us</Link></h2>
        <Dropdown onFilterChange={onFilterChange} />
        {
          (filteredPeople.length < 1) ?
            <p className="result-text">Sorry! The Force wasn't strong enought... please try other criteria!</p> :
            <p className="result-text">We found {filteredPeople.length} matches </p>
        }
        <div className="people-list">
          <HorizontalScroll reverseScroll='true'>
            {
              filteredPeople.map((person) => (
                <Avatar key={person.name} person={person} getUserChoice={getUserChoice} />
              ))
            }
          </HorizontalScroll>
        </div>
    </main>
  )     
}

    export default Home; 