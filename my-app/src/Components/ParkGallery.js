import React from 'react';


function ParkGallery ({ parks }){

  const newParkData = parks;
  console.log(newParkData);
  
  const parkData = newParkData.map( park => 
        <img src = {park.images[0].url}/>)
  
    return (
      <ul className="cards">{parkData}</ul>
    );
  }
  


export default ParkGallery;
