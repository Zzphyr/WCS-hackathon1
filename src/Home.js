import React from 'react';
import Avatar from './Avatar';
        


const Home = ({ people, getUserChoice }) => {
    console.log("Home", people)
    //console.log("Home",getUserChoice)
    
    return (
        <>
        {people.map((person) => {
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