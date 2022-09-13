import React from 'react';
import ParkCard from './ParkCard';

function ParkList ({parks}){
    
    return(
        <div>
        
             {parks.map((park) => {
        return (
          <ParkCard
            key={park.id}
            park={parks.fullName}
            />
            );
      })}
         </div>
    )
}

export default ParkList;
