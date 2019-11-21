import React from 'react';
import Bubble from './Bubble';
        


const Home = ({ people }) => {
    console.log("Home", people)
    
    
    return (
        <>
        {people.map((p,i) => {
            return (
                <div key={p.name}>
                    <Bubble person={p} />
                </div>
            )
        })}
        </>
        )
}















    export default Home; 