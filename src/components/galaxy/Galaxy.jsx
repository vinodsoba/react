import React, { useContext } from "react";
import { motion } from 'framer-motion';
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
        <motion.div
        initial={{ x: 0  }}
        animate={{ x: [ 1, 8, 10, 8, 1], y: [1,2,3,2, 1]  }}
        transition={{ ease: 'anticipate', times: [0, 0.2, 0.5, 0.8, 1 ], delay: 0.2, duration: 4, repeat: Infinity }}
        >
          <img className="spaceman" alt="space-man" src={SpaceMan} />
        </motion.div>
        
      </div>
      <div className="stars-planets">
    
          <motion.div 
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ type: 'tween', duration: 230, repeat: 4 }}
          className="stars" 
          style={theme === 'dark-theme' ? { backgroundImage: `url(${Planet})`, backgroundRepeat: 'no-repeat'} : {backgroundImage: `url(${Sun})`, backgroundRepeat: 'no-repeat'} }>

          </motion.div>
      </div>
   
    
      <div className="rocket-container">
        <motion.div 
        initial={{ opacity: 0,  scale: 0, y: -200}}
        animate={{ opacity: 1,  scale: 1, y: -240, x: 200 }}
        transition={{
          duration: 3,
        }}
        ><img className="rocket" alt="rocket" src={Rocket} />
        </motion.div>
      </div>
  </div>
  )
}
