import React from 'react';
import Avatar from './Avatar';
import Dropdown from './Dropdown';

import './Home.scss';
       
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

        <>
            <p>Home page</p>

            <Dropdown onFilterChange={onFilterChange} />
            {(filteredPeople.length < 1) ? <p>Sorry! The force wasn't strong enought... please try other criteria!</p> : <p>We found {filteredPeople.length} matches </p>}
            {console.log("filtered",filteredPeople)}
                {filteredPeople.map((person) => {
                    return (
                        <div key={person.name}>
                            <Avatar person={person} getUserChoice={getUserChoice} />
                        </div>
                )
            })}


        
        <div class="page">
  <div class="content">
    <div class="circle">
      <div class="circle_title">
        <h2>Luke Skywalker</h2>
        <h3>Has the longest Lightsaber</h3>
      </div>
      <div class="circle_inner">
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png"/>
        </div>
      </div>
      <div class="content_shadow"></div>
    </div>
  </div>
  <div class="content">
    <div class="circle">
      <div class="circle_title">
        <h2>Darth Vader</h2>
        <h3>Can't breath properly</h3>
      </div>
      <div class="circle_inner">
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png"/>
        </div>
      </div>
      <div class="content_shadow"></div>
    </div>
  </div>
  <div class="content">
    <div class="circle">
      <div class="circle_title">
        <h2>Chewie</h2>
        <h3>Big heart, woolly hair</h3>
      </div>
      <div class="circle_inner">
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png"/>
        </div>
        <div class="circle_inner__layer">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png"/>
        </div>
      </div>
      <div class="content_shadow"></div>
    </div>
  </div>
</div>


        </>
        )     
}

    export default Home; 