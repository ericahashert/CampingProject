import React from 'react';

function ParkCard({ park }) {
    const {fullName} = park;
return(
    <div>
        {fullName}
    </div>
    )
}
 export default ParkCard;