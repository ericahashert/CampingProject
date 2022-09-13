import React from 'react';

function ParkCard({image, name}) {


    return (
        <div>
            <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            </li>
        </div>
    );
    }

export default ParkCard;




