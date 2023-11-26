import React from 'react';

import useFetchMenu from '../../hooks/use-fetch-menu';

import './style.css';


function FooterLinks() {
    const { data } = useFetchMenu();

    console.log(data);
  return (
    <div className='footer-links'>
        <ul>
        {
            data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))
        }

        </ul>
       
    </div>
  )
}

export default FooterLinks