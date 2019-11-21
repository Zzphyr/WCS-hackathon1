import React from 'react';
import './Avatar.css';

const Bubble = ({ person, getUserChoice }) => {
   return (
      <> 
         <img 
            src={person.image} 
            alt={person.name} 
            className="avatar-img"
            onClick={() => getUserChoice(person)}
            />
      </>
   )
}

export default Bubble;