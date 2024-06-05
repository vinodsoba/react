import React, { useContext } from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

import { ThemeContext } from './../../Theme';
import { HeaderWrapper } from './Header.style';
import { Navbar,  Col, Container } from 'react-bootstrap';

function Header({ authUser }) {

    const { theme, toggleTheme  } = useContext(ThemeContext);
    return ( 
        <HeaderWrapper>
            <div className='header-container'>
            <Navbar expand="sm" className="justify-content-end nav">
                <Container>
                <Col md={4}>
                    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                </Col>
                <Navbar.Toggle />
                <Col md={8}>
                    <Navbar.Collapse className='justify-content-end'>   
                        <Navigation authUser={authUser} />
                        <div class="form-check form-switch">
                            <input onClick={() => toggleTheme()} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </Navbar.Collapse>
                </Col>
                </Container>
            </Navbar>
            </div>
        </HeaderWrapper>
     );
}

export default Header;