import React, {useState} from 'react';

function ParkCard({image, name, description, activities, admission, addressStreet, addressCity, addressState, addressZip}) {
    const [showFront, setShowFront] = useState(true);
    //const [image, setImage] = useState("")


    if (activities === undefined) return <p>LOADING...</p>

    function handleActivities (){
        console.log(activities[0])
        if (activities.length >= 4) {
            return( 
                <ul>
                    <li>{activities[0].name}</li>
                    <li>{activities[1].name}</li>
                    <li>{activities[2].name}</li>
                    <li>{activities[3].name}</li>
                </ul>
            )
            
        } else if (activities.length === 3){
            return( 
                <ul>
                    <li>{activities[0].name}</li>
                    <li>{activities[1].name}</li>
                    <li>{activities[2].name}</li>
                </ul>
            )
        } else {
            return( 
                <ul>
                    <li>{activities[0].name}</li>
                    <li>{activities[1].name}</li>
                </ul>
            )
        }

    }

    function frontCard() {
        return (
            <li className="frontCard">
                <img className ="card-image" src={image}/>
                <p>Admission: ${admission}</p>
                <div className ="address">
                    <p>Address: {addressStreet}</p>
                    <p>{addressCity}, {addressState} {addressZip}</p>
                </div>
            </li>
        )
    }
    function backCard() {
        return (
            <div>
                <p>{description}</p>
                <p> Activities Include:</p>
                <div>{handleActivities}</div>
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




