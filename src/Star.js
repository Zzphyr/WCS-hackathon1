import React from 'react';



const Star = ({ isFavorite, onAddToList, chosenOne }) => {
    if (isFavorite) {
        return <div onClick={() => onAddToList(chosenOne, 'favorites')}>a</div>
    }
    return (
        <div className="tellmemore" onClick={() => onAddToList(chosenOne, 'favorites')}>Tell me more!</div>

    ) 
}

export default Star;