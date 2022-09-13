import React, {useState} from 'react';

function ParkCard({image, name}) {
    const [showFront, setShowFront] = useState(true);

    function frontCard() {
        return (
            <img className ="card-image" src={image}/>
        )
    }
    function backCard() {
        return (
            <img className ="card-image" src=""/>
        )
    }


    function handleClick() {
        setShowFront((showFront) => !showFront);
      }
    return (
        <div className = "card" onClick = {handleClick}>
            
            <h4 className='card-title'>{name}</h4>
            <div className="container">
            {showFront ? frontCard() : backCard()}
            </div>
        </div>
    );
    }

export default ParkCard;




