import React, {useState} from 'react';

function ParkCard({image, name, description, activities, addressStreet, addressCity, addressState, addressZip}) {
    //const [image, setImage] = useState("")
    const [showFront, setShowFront] = useState(true)
    

    if (activities === undefined) return <p>LOADING...</p>

    // function handleClickEvent () {
    //     if (image1 === true) {
    //         return image2
    //     } if (image2 === true) {
    //         return image3
    //     } if (image3 === true) {
    //         return image4
    //     } if (image4 === true) {
    //         return image1
    //     }
    // }

    function frontCard() {
        return (
            <ul className="frontCard">
                <img className ="card-image" src={image}/>
                <div className ="address">
                    <p>Address: {addressStreet}</p>
                    <p>{addressCity}, {addressState} {addressZip}</p>
                </div>
            </ul>
        )
    }
    function backCard() {
        return (
            <div className="backCard">
                <p className="description">{description}</p>
                <p className="activities"> Activities Include:</p>
                    <ul className="activityList">
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




