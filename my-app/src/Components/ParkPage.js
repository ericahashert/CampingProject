import React, {useState, useEffect} from 'react';
import ParkList from './ParkList';
import Search from './Search';

function ParkPage() {
    const [parks, setParks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const displayedParks = parks.filter((park) => {
        return park.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
  
    useEffect(() => {
      fetch("https://developer.nps.gov/api/v1/parks?parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG")
        .then((r) => r.json())
        .then((parksArray) => {
          //setParks(parksArray);
          console.log(parksArray);
        });
    }, []);
return (
    <div>
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <ParkList
        parks={displayedParks}
        />
    </div>
)

}

export default ParkPage;
