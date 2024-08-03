import React from 'react'
import { SideMenuWrapper } from './SideMenu.style'
import MainMenu from '../mainmenu/MainMenu'

export default function SideMenu({ showSideBar, setShowSideBar}) {
  return (
    <SideMenuWrapper>
      <div className='sidebar-menu'>
        <MainMenu showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
    </SideMenuWrapper>
  )
}
