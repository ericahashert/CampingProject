import React from 'react';


function ParkGallery ({ parks }){


  const newParkData = parks;
  console.log(newParkData);



  const parkData = newParkData.map( park => 
    
        <img 
        className = "gallery" 
        alt = {park.images} 
        key = {park.id} 
        src = {park.images[0].url}
        />)

    return (
      <ul className="cards">{parkData}</ul>
  );
}


export default ParkGallery;





// const newParkData = parks;


//   return (
  

//     <ul className="cards">

//       {newParkData.map((park) => {
//         return (
//         <img 
//         className = "gallery" 
//         alt = {park.images} 
//         key = {park.id} 
//         src = {park.images[0].url}
//         />
//         );
//       })}
//     </ul>
//   );
// };
    


// export default ParkGallery;
