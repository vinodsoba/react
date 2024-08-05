import React from 'react';

import useFetchService from '../hooks/use-fetch-service';
import Layout from '../components/layout/Layout';

function Services() {

  const { data } = useFetchService();

  console.log(data);
  return (
    <Layout>
      <div className='header-hero-container'>
      <h1>Services</h1>
      <ul>
        {
          data.map( item =>
            <li key={item.id}>{item.title.rendered}</li>
          )
        }
      </ul>
    </div>
    </Layout>
  )
}

export default Services;