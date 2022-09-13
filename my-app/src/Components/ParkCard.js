import React from 'react';

function ParkCard({image, name}) {


    return (
        <div className = "card">
            <img className ="card-image" src={image} alt={name} />
            <div className="container">
            <h4 className='card-title'>{name}</h4>
            </div>
        </div>
    );
    }

export default ParkCard;




