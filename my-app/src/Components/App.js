import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header.js';
import '../App.css';
import ParkPage from './ParkPage';
import ParkMap from './ParkMap';
import ParkGallery from './ParkGallery';
import { Switch, Route } from "react-router-dom";


 // get parks up to app so you can pass it in 

function App() {

    const [parks, setParks] = useState([ ]);
    
  
    useEffect( () => {
        fetch("https://developer.nps.gov/api/v1/parks?start=50parkCode=&api_key=j1k4pib60NZrUWACuiahvKfh9s7O7BOhHRr4qoGG")
        .then((res) => res.json())
        .then((data) => setParks(data.data))
       }, [] )

      

  return (
  

    <div className="app">
      <Header />
  
      <Switch>
          <Route exact path="/">
              <ParkPage parks={parks}/>
          </Route>
          
          <Route path="/Gallery">
              <ParkGallery parks={parks}/>
          </Route>
         

          <Route path="/Map">
              <ParkMap />
          </Route>
        
        </Switch>
      
      
      
    </div>



)};

export default App;




