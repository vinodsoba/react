import React from 'react';
import BespokeResponsive from '../components/bespoke/BespokeResponsive';
import Home from '../components/home/Home';
import Passionate from '../components/passionate/Passionate';
import WhatIDo from '../components/whatido/WhatIDo';
import HowIWork from '../components/howiwork/HowIWork';
import Layout from '../components/layout/Layout';
import WhyHire from '../components/whyhire/WhyHire';

// import Theme Provider


const Homepage = () => {

  return (
    <Layout>
       <Home />
        <HowIWork /> 
        <BespokeResponsive />
        <Passionate />
        <WhatIDo />
        <WhyHire />  
    </Layout>
  )
}

export default Homepage;