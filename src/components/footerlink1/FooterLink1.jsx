import React from 'react';
import useFetchFooterLinks from './../../hooks/use-fetch-footer-data'
import './style.css';

function FooterLinks() {
    const { data } = useFetchFooterLinks([]);    

    console.log(data);

    if(!data) return null;
  return (
    <div className='footer-links'>
        <ul>
          {
            data.map(item => 
              <li key={item.ID}>{item.title}</li>
              
            )}
       </ul>
    </div>
  )
}

export default FooterLinks