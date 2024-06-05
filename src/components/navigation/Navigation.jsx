import React, { useContext } from 'react'
import { NavigationWrapper } from "./Navigation.style";
import TopNavigation from '../topnavigation/TopNavigation';

function Navigation({ authUser }) {  
    return ( 
        <NavigationWrapper>
            <TopNavigation authUser={authUser}/>
        </NavigationWrapper>
     );
}

export default Navigation;