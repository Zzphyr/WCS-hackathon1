import React from 'react';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
       
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
        </>
        )

     
}















    export default Home; 