import React, { useContext } from "react";

import { ThemeContext } from "../../Theme";

// images

import SpaceMan from './../../assets/img/spaceman.svg';
import Rocket from './../../assets/img/rocket.svg';
import "./style.css";

import Sun from './../../assets/img/sun.png';
import Planet from './../../assets/img/planet.png';

export default function Galaxy() {

  const { theme } = useContext(ThemeContext);
  return (
    <div className="box">
      <div className="spaceman-container">
        <img className="spaceman" alt="space-man" src={SpaceMan} />
      </div>
      <div className="stars-planets">
    
          <div className="stars" style={theme === 'dark-theme' ? { backgroundImage: `url(${Planet})`, backgroundRepeat: 'no-repeat'} : {backgroundImage: `url(${Sun})`, backgroundRepeat: 'no-repeat'} }>

          </div>
      </div>
   
    
      <div className="rocket-container">
        <img className="rocket" alt="rocket" src={Rocket} />
      </div>
  </div>
  )
}
