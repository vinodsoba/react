import React from 'react';

import './style.css';
import { Link } from 'react-router-dom';

function DropdownMenu() {

   
  return (
    <div className='dropdown-menu'> 
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>  
    </div>    
  )
}

export default DropdownMenu