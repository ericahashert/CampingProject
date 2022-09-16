
function ParkForm () {
    return (
        <div className = "wrapper">
            <h1>Add a Site</h1>
            <h4 className="form-description">Found a new favorite campground within a National Park? Have advice to offer your fellow campers? Spot a bear? Post it here! </h4>
            <form>
                <input 
                    className="newSiteForm"
                    type="text" 
                    name="name" 
                    placeholder="Site name" 
                 />
                <input 
                    className="newSiteForm"
                    type="number" 
                    name="latitude" 
                    placeholder="Latitude" 
                />
                <input 
                    className="newSiteForm"
                    type="number" 
                    name="longitude" 
                    placeholder="Longitude" 
                />
                 <input 
                    className="newSiteForm"
                    type="text" 
                    name="comments" 
                    placeholder="Comments" 
                />
                   <input 
                    className="newSiteForm"
                    type="text" 
                    name="username" 
                    placeholder="Name" 
                />
                <button className="formButton" type="submit">Add location</button>
            </form>
        </div>
    )
}

export default ParkForm;