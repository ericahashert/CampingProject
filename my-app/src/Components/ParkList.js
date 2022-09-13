import React from 'react';
import ParkCard from './ParkCard';

function ParkList ({ parks }){

  const newParkData = parks;
  console.log(newParkData);
  const parkData = newParkData.map( park => 
        <ParkCard
          key={park.id}
          name={park.name}
          image={park.image}
        />)
  
    return (
      <ul className="cards">{parkData}</ul>
    );
  }
  


export default ParkList;
