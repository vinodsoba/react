import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import useFetchMenu from '../../hooks/use-fetch-menu';

import { ThemeContext } from '../../Theme';

import './style.css';

function FooterLink1() {
    const { data } = useFetchMenu([]);
    const { theme } = useContext(ThemeContext);

    console.log(data);

  return (
    <div className="footer-links">
        {
            data.map(item =>  
            <ul>
                <li style={theme === 'light-theme' ? { color: 'var(--text-primary-dark)'} : { color: 'var(--text-primary-dark)'}} key={item.term_id}><Link to={item.url}>{item.title}</Link></li>
            </ul>
               
            )
        }
    </div>
  )
}

export default FooterLink1