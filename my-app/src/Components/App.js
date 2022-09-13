import React from 'react';
import Header from './Header.js';
import '../App.css';
import ParkPage from './ParkPage';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <Header />
      <ParkPage />
      <NavBar />
    </div>
  );
}

export default App;

