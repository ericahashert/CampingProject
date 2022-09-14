import React from 'react';
import Header from './Header.js';
import '../App.css';
import ParkPage from './ParkPage';
import ParkMap from './ParkMap';
import ParkGallery from './ParkGallery';
import { Switch, Route } from "react-router-dom";




function App() {



  return (
  

    <div className="app">
      <Header />
  
      <Switch>
          <Route exact path="/">
              <ParkPage />
          </Route>
          <Route path="/Gallery">
              <ParkGallery />
          </Route>

          <Route path="/Map">
              <ParkMap />
          </Route>
        
        </Switch>
      
      
      
    </div>


)};

export default App;




