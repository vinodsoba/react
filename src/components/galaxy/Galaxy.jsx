import React from "react";

// images
import PlanetRing from './../../assets/img/planet-ring.png';
import Planet from './../../assets/img/planet.png';
import SpaceMan from './../../assets/img/spaceman.svg';
import Rocket from './../../assets/img/rocket.svg';
import "./style.css";

export default function Galaxy() {
  return (
    <div className="box">
      <div className="spaceman-container">
      <img className="spaceman" alt="space-man" src={SpaceMan} />
      </div>
    <div className="planet">
      <div className="overlap-group">
        <img className="vector" alt="planet-ring" src={PlanetRing} />
        <img className="img" alt="planet" src={Planet} />
      </div>
    </div>
    <div className="rocket-container">
    <img className="rocket" alt="rocket" src={Rocket} />
    </div>
  </div>
  )
}
