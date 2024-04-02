import React from 'react';

import useFetchService from '../hooks/use-fetch-service';

function Services() {

  const { data } = useFetchService();

  console.log(data);
  return (
    <div className='header-hero-container'>
      <>
      <h1>Services</h1>
      <ul>
        {
          data.map( item =>
            <li key={item.id}>{item.title.rendered}</li>
          )
        }
      </ul>
      </>
    </div>
  )
}

export default Services;