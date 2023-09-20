import React, { useContext } from 'react'
import  { Link }  from 'react-router-dom'
import { NavigationWrapper } from "./Navigation.style";
import { ThemeContext } from './../../Theme';



function Navigation() {

    const { theme }  = useContext(ThemeContext);
  
    return ( 
        <NavigationWrapper>
            <ul>
                <Link to="/services">Services</Link>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </NavigationWrapper>
     );
}

export default Navigation;