import React from 'react';


function ParkGallery ({ parks }){



// image = 'https://s27363.pcdn.co/wp-content//2022/02/Best-National-Parks-USA-Photo.jpg.optimal.jpg' 


  const parkData = parks.reverse().map( park => 
    
        <img 
        className = "galleryCards" 
        alt = {park.images} 
        key = {park.id} 
        src = {park.images[0].url}
          />)

    return (
      <ul className="galleryCards" >{parkData}</ul>
  );

};

export default ParkGallery;


// if (images.url === null) {
//   return src='https://s27363.pcdn.co/wp-content//2022/02/Best-National-Parks-USA-Photo.jpg.optimal.jpg'
// }
//  return src={parks.images[0].url}}





  // const newParkData = parks;
  // console.log(newParkData);



  // const parkData = newParkData.reverse().map( park => 
    
  //       <img 
  //       className = "gallery" 
  //       alt = {park.images} 
  //       key = {park.id} 
  //       src = {park.images[0].url}
  //       />)

  //   return (
  //     <ul className="cards">{parkData}</ul>
  // );





//   console.log(parks);
//   return (
//       <ul className="cards">

//         {parks.map((park) => {
//           return (
//           <img 
//           className = "gallery" 
//           alt = {park.images} 
//           key = {park.id} 
//           src = {park.images[0].url}
//           />
//           );
//       })}
//       </ul>

//   );
// }




//     const empty = parks.results.length === 0 ? true : false;
  
//     const cards = parks.results.map(park => 
//       <img 
//         alt = {park.images} 
//         key = {park.id} 
//         src = {park.images[0].url}
//         />)
      
//       return <div id='gallery'>
//           {empty ? <h1>Loading ...</h1> : cards}
//            </div>
// }


    








// <ul className="cards">

  // {parks.map((park) => {
  //   return (
  //   <img 
  //   className = "gallery" 
  //   alt = {park.images} 
  //   key = {park.id} 
  //   src = {park.images[0].url}
  //   />
  //   );
// })}
// </ul>
//  

// const cards = parks.reverse().map(park => 
//   <img 
//     alt = {park.images} 
//     key = {park.id} 
//     src = {park.images[0].url}
//     />)
  
//   return <div id='gallery'>
//       {empty ? <h1>Loading ...</h1> : cards}
//        </div>


// }




  