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
          // image2={park.images[1].url}
          // image3={park.images[2].url}
          // image4={park.images[3].url}
          description={park.description}
          activities ={park.activities}
          admission = {park.entranceFees.cost}
          addressStreet = {park.addresses[0].line1}
          addressCity = {park.addresses[0].city}
          addressState = {park.addresses[0].stateCode}
          addressZip = {park.addresses[0].postalCode}
        />)
  
    return (
      <ul className="cards">{parkData}</ul>
    );
  }
  


export default ParkList;
