import React, { useContext } from 'react'
import { NavigationWrapper } from "./Navigation.style";
import TopNavigation from '../topnavigation/TopNavigation';

function Navigation() {  
    return ( 
        <NavigationWrapper>
            <TopNavigation />
        </NavigationWrapper>
     );
}

export default Navigation;