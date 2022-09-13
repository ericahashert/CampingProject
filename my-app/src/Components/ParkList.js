import React from 'react';
import ParkCard from './ParkCard';

function ParkList ({parks}){
    
    return(
        <div>
        
             {parks.map((park) => {
        return (
          <ParkCard
            key={park.id}
            park={park}
            />
            );
      })}
         </div>
    )
}

export default ParkList;
