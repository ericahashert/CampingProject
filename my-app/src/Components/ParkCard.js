import React, {useState} from 'react';

function ParkCard({image, name, description, activities}) {
    const [showFront, setShowFront] = useState(true);
    console.log(activities[0])
    if (activities === undefined) return <p>LOADING...</p>

    function frontCard() {
        return (
            <img className ="card-image" src={image}/>
        )
    }
    function backCard() {
        return (
            <div>
                <p>{description}</p>
                <p> Activities Include: {activities[0].name} and {activities[1].name}</p>
                
                
                
                

            </div>
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




