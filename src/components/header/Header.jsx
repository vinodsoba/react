import React, { useContext } from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

import { ThemeContext } from './../../Theme';
import { HeaderWrapper } from './Header.style';
import { Navbar,  Col } from 'react-bootstrap';

function Header() {
    const { theme, toggleTheme  } = useContext(ThemeContext);
    return ( 
        <HeaderWrapper>
            <div className='header-container'>
            <Navbar expand="sm" className="justify-content-end">
                <Col md={8}>
                    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                </Col>
                <Navbar.Toggle />
                <Col md={4}>
                    <Navbar.Collapse className='justify-content-end'>   
                        <Navigation />
                        <button onClick={() => toggleTheme()}>{theme}</button>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
            </div>
        </HeaderWrapper>
     );
}

export default Header;