import React, { useState} from 'react';

import './style.css';

function DropdownMenu() {

    const [ closeMenu, setCloseMenu ] = useState(false);

    const handleHoverOut = () => {
        setCloseMenu(true);
    }
  return (
     
      <div 
      className='dropdown-menu'
      onMouseLeave={handleHoverOut}
      > 
            <ul>
                <li>Web Development</li>
                <li>Web Design</li>
                <li>WordPress</li>
                <li>Ecommerce</li>
            </ul>
            
        </div>
     
    
  )
}

export default DropdownMenu