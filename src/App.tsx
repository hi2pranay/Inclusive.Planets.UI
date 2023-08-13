import React from 'react';
import { useState } from "react";
import './App.css';
import { PlanetsList } from './Components/PlanetsList';
import { Planet } from './Components/Planet';

function App() {
  const [planet, setPlanet] = useState('');

  return (
    <div className="container">
      <h1 className="text-center" style={{color:"white"}}>Planets</h1>
      <>
        <div className="vertical-list">
          <PlanetsList setPlanet = {setPlanet}/>
        </div>
        <div style={{paddingTop:10}}>
          {
            planet !== '' &&
            <Planet selectedPlanetName={planet}></Planet>
          }
        </div>
      </>
    </div>
  );
}

export default App;
