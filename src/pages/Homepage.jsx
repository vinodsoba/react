import React from 'react';
import BespokeResponsive from '../components/bespoke/BespokeResponsive';
import Home from '../components/home/Home';
import Passionate from '../components/passionate/Passionate';
import Services from '../components/services/Services';
import WhatIDo from '../components/whatido/WhatIDo';

// import Theme Provider


const Homepage = () => {

  return (
    <div>
        <Home />
        <BespokeResponsive />
        <Passionate />
        <WhatIDo />
        <Services />        
    </div>
  )
}

export default Homepage;