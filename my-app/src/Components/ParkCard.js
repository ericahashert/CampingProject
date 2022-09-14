import React, {useState} from 'react';

function ParkCard({image, name, description, activities, admission, addressStreet, addressCity, addressState, addressZip}) {
    const [showFront, setShowFront] = useState(true);
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
                        <li>{activities[2].name}</li>
                        <li>{activities[3].name}</li>
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




