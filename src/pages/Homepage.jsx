import React from 'react';
import BespokeResponsive from '../components/bespoke/BespokeResponsive';
import Home from '../components/home/Home';
import Passionate from '../components/passionate/Passionate';
import Services from '../components/services/Services';
import WhatIDo from '../components/whatido/WhatIDo';
import HowIWork from '../components/howiwork/HowIWork';
import Layout from '../components/layout/Layout';

// import Theme Provider


const Homepage = () => {

  return (
    <Layout>
       <Home />
        <BespokeResponsive />
        <Passionate />
        <WhatIDo />
        <Services /> 
        <HowIWork />   
    </Layout>
  )
}

export default Homepage;