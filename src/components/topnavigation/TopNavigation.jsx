import React, { useCallback, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../Theme';
import { logout } from '../../redux/slice/authSlice';
import NavBarMenuIcon from './../../assets/img/icon/navbar-menu-icon.svg'

import './style.css';
import SideMenu from '../sidemenu/SideMenu';

function TopNavigation({ setShowSideBar, showSideBar}) {
    const { theme } = useContext(ThemeContext);
    const auth = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    //const auth = useSelector((state) => state.auth.user);

    //console.log('authUser', authUser);

    const logout = () => {
      localStorage.clear(auth);
    }

  return (
    <div className='top-nav' style={ { width: '100%' }}>
      {!showSideBar ? <SideMenu  setShowSideBar={setShowSideBar} showSideBar={showSideBar}/> : null }
      
      <ul> 
            
            <li className='cta-primary'><Link to="/signup">Sign up</Link></li>
            {!auth ?  (
              <li className='cta-primary'><Link to="/login">Login</Link></li>
            ) : (
              <>
                <li className='signup-btn'><Link onClick={() => dispatch(logout())}>Logout</Link></li>
                <li className='signup-btn'><Link to="/dashboard">Dashboard</Link></li>
                <p className='user-details' style={theme =="dark-theme" ? {color: '#fff'} : {color: '#000'}}>Welcome! {auth.user_nicename}</p>
              </>
              
            )
            
            }   

      </ul>
    </div>
  )
}

export default TopNavigation;
