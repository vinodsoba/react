import React, { useState } from 'react';
// axios to query the API
import axios from 'axios';

// module
import Portfolio from '../components/portfolio/Portfolio';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

import useFetchData from '../hooks/use-fetch-portfolio';

function Work() {

    const { data } = useFetchData();

    const { isLoading, setisLoading } = useState();

        
    console.log(data);
        return (
            <>
             <div className='header-hero-container'>
                <h1> My Work</h1>
                { data.map(item =>  
                    <h1 key={item.id}>{item.title.rendered}</h1>   
                )}
            </div>
            <Container>
                <Portfolio />
                <div className="port-col-wrap">
                    <h1>Looking  to start a new project?</h1>
                    <h4>if you have a project in mind and want some initial advice then email me at <Link to="mailto:hello@vinodsoba.co.uk">hello@vinodsoba.co.uk</Link>. Lets work together and bring your ideas to life!</h4>
                </div>
                
            </Container>
        
            </> 
    );
    
}
 
export default Work;