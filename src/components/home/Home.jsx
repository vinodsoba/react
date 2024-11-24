import React from 'react';

import HeroBanner from '../herobanner/HeroBanner';

import useFetchData from '../../hooks/use-fetch-data';

function Home() {
    const { data } = useFetchData();
    
    console.log(data);
    return (
        <>
        {
            data.map( item => item.id === 7 ?
                <HeroBanner/>                
            : null
            )
        }
        
        </>
        
    );

}
 
export default Home;
