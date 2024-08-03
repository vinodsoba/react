import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faHome } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const auth = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();

    const logout = () => {
      const user = localStorage.getItem('user');
        console.log('logout button works');
        localStorage.clear(user);
        if(!user){
          window.location='http://localhost:3001/login';
        }
      }

  return (
    <div className='sidebar'>
        <Link to="/dashboard"><FontAwesomeIcon 
        style={{ color: '#fff', fontSize: "22px"}}
        icon={faHome} /></Link>
         <Link to="/dashboard/settings">
         <FontAwesomeIcon 
        style={{ color: '#fff', fontSize: "22px"}}
        icon={faCog} />
         </Link>
        <Link className='text-black' 
        onClick={() => dispatch(logout())}>
        Logout
        </Link>
    </div>
  )
}

export default Sidebar