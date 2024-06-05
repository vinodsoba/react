import React from 'react';
// module
import Portfolio from '../components/portfolio/Portfolio';
import Container from 'react-bootstrap/esm/Container';
import CallToAction from '../components/calltoaction/CallToAction';
import Layout from '../components/layout/Layout';

function Work() {   
        return (
            <Layout>
             <div className='header-hero-container'>
                <h1>My Work</h1>
            </div>
            <Container> 
                <Portfolio />              
            </Container>
            <CallToAction />  
            </Layout> 
    );
    
}
 
export default Work;