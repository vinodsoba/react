import React, { useContext } from 'react';

import useFetchData from '../../hooks/use-fetch-data';

import './style.css';

function AboutMe() {

    const { data } = useFetchData();

        console.log(data);
  return (
    <div className="about-me--container">
        <h1>About Me</h1>
        {
            data.map(item => item.id === 18 ? (
                <>
                    <div dangerouslySetInnerHTML={{__html: item.content.rendered }} />
                </>
                
            ) : null

            )
        }  
    </div>
  )
}

export default AboutMe