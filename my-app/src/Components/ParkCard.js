import React, {useState} from 'react';

function ParkCard({image, name, description, activities, admission, addressStreet, addressCity, addressState, addressZip}) {
    //const [image, setImage] = useState("")
    const [showFront, setShowFront] = useState(true)

    function frontCard() {
        return (
        <img className="card-image" src={image} />
        )
    }

    function backCard() {
        return(
        <img className="card-image" src="" />
        )
    }

    function handleClick() {
        setShowFront((showFront) => !showFront)
      }
    

    if (activities === undefined) return <p>LOADING...</p>


    function frontCard() {
        return (
            <ul className="frontCard">
                <img className ="card-image" src={image}/>
                <p>Admission: ${admission}</p>
                <div className ="address">
                    <p>Address: {addressStreet}</p>
                    <p>{addressCity}, {addressState} {addressZip}</p>
                </div>
            </ul>
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




