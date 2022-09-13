import React from 'react';
import ParkCard from './ParkCard';

function ParkList ({ parks }){

  const newParkData = parks;
  console.log(newParkData);
  
  const parkData = newParkData.map( park => 
        <ParkCard
          key={park.id}
          name={park.fullName}
          image={park.images[0].url}
          description={park.description}
          activities ={park.activities}
        />)
  
    return (
      <ul className="cards">{parkData}</ul>
    );
  }
  


export default ParkList;
