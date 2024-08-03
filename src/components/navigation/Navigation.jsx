import React, { useContext } from 'react'
import { NavigationWrapper } from "./Navigation.style";
import TopNavigation from '../topnavigation/TopNavigation';

function Navigation({ authUser, setShowSideBar, showSideBar }) {  
    return ( 
        <NavigationWrapper>
            <TopNavigation 
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
            authUser={authUser}
            />
        </NavigationWrapper>
     );
}

export default Navigation;