import React from 'react';
import './Bubble.css';

const Bubble = ({ person }) => {
   return (
      <>
         <img 
            src={person.image} 
            alt={person.name} 
            className="bubble-img"
            />
      </>
   )
}

export default Bubble;