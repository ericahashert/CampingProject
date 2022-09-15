import React, {useState} from 'react';

function ParkCard({image = "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg", name, description, activities, admission, addressStreet, addressCity, addressState, addressZip}) {
    const [showFront, setShowFront] = useState(true);

    if (activities === undefined) return <p>LOADING...</p>


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
                <ul>
                    <li>{activities[0].name}</li>
                    <li>{activities[1].name}</li>
                </ul>
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




