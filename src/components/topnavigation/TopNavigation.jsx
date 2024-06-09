import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import useFetchHeaderMenu from '../../hooks/use-fetch-header-menu';
import { ThemeContext } from '../../Theme';
import { logout } from '../../redux/slice/authSlice';


import './style.css';



function TopNavigation() {
  const { theme } = useContext(ThemeContext);
    const auth = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    //const auth = useSelector((state) => state.auth.user);

    //console.log('authUser', authUser);


    const { data } = useFetchHeaderMenu([]);

    const logout = () => {
      localStorage.clear(auth);
    }
    

  return (
    <div className='top-nav'>
      <ul>
      {
            data && data.map(item => (
              <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
              
            ))
       }
            <li className='signup-btn'><Link to="/signup">Sign up</Link></li>
            {!auth ?  (
              <li className='signup-btn'><Link to="/login">Login</Link></li>
            ) : (
              <>
                <li className='signup-btn'><Link onClick={() => dispatch(logout())}>Logout</Link></li>
                <p className='user-details' style={theme =="dark-theme" ? {color: '#fff'} : {color: '#000'}}>Welcome! {auth.user_nicename}</p>
              </>
              
            )
            
            }
            
            
      </ul>
    </div>
  )
}

export default TopNavigation;
