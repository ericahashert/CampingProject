import React, {useState, useEffect} from 'react';
import ParkList from './ParkList';
import Search from './Search';
import ParkGallery from './ParkGallery';

function ParkPage() {
    const [parks, setParks] = useState([ ]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchReq1 = fetch(
      "https://developer.nps.gov/api/v1/parks?parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    ).then((res) => res.json());

    // const fetchReq2 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=50parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq3 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=100parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq4 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=150parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq5 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=200parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq6 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=250parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq7 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=300parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq8 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=350parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq9 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=400parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    // const fetchReq10 = fetch(
    //   "https://developer.nps.gov/api/v1/parks?start=450parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG"
    // ).then((res) => res.json());

    
    // const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3, fetchReq4, fetchReq5, fetchReq6, fetchReq7, fetchReq8, fetchReq9, fetchReq10]);
    //   allData.then(parks => console.log(parks))
    
    // useEffect( () => {
    //     fetch("https://developer.nps.gov/api/v1/parks?parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG")
    //     .then((res) => res.json())
    //     .then(parks => setParks(parks))
    //    }, [] )

       useEffect( () => {
        fetch("https://developer.nps.gov/api/v1/parks?start=50parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG")
        .then((res) => res.json())
        .then((data) => setParks(data.data))
       }, [] )


    console.log(parks)
      
    
     const displayedParks = parks.filter((park) => {
       return park.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      });
      // const removeParks = () => {
      //   setParks(parks => 
      //     parks.filter(park =>{
      //       return park.id !== 32;
      //     }))}
      //     console.log(removeParks());

  
      

return (
    <div>
        {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
        {/* <ParkList parks={displayedParks}/> */}
        <ParkGallery parks = {displayedParks}/>
        
    </div>
)

}

export default ParkPage;
