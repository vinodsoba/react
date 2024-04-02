import React from 'react';
import { Link } from 'react-router-dom';
import useFetchHeaderMenu from '../../hooks/use-fetch-header-menu';

import './style.css';

function TopNavigation() {

    const { data } = useFetchHeaderMenu([]);


  return (
    <div className='top-nav'>
      <ul>
      {
            data.map(item => (
              <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
            ))
       }

      </ul>
      
    </div>
  )
}

export default TopNavigation;