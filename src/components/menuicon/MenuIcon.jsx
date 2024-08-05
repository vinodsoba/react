import React, { useCallback } from 'react'
import NavBarMenuIcon from './../../assets/img/icon/navbar-menu-icon.svg'

function MenuIcon({ setShowSideBar, showSideBar}) {
    const openModal = useCallback(() => {
        setShowSideBar(!showSideBar)
     }, [!showSideBar]);
  return (
    <div>
        <img 
        src={NavBarMenuIcon} 
        className='nav-bar-icon'
        onClick={openModal}
        />   
    </div>
  )
}

export default MenuIcon