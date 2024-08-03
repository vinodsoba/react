import React, { useContext, useCallback, useState } from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import { ThemeContext } from './../../Theme';
import { HeaderWrapper } from './Header.style';
import { Navbar,  Col, Container } from 'react-bootstrap';
import MenuIcon from '../menuicon/MenuIcon';
import SideMenu from '../sidemenu/SideMenu';



function Header({ authUser}) {
    const [ showSideBar, setShowSideBar ] = useState(true)
    const { theme, toggleTheme  } = useContext(ThemeContext);
    return ( 
        <HeaderWrapper>
            <div className='header-container'>
            <Navbar expand="sm" className="justify-content-start nav">
                <Container>
                <Col md={4}>
               <MenuIcon 
               showSideBar={showSideBar}
               setShowSideBar={setShowSideBar}
               />
                </Col>
                <Col md={5}>
                    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                </Col>
                <Navbar.Toggle />
                <Col md={3}>
                    <Navbar.Collapse className='justify-content-end'>   
                        <Navigation 
                        authUser={authUser} 
                        showSideBar={showSideBar} 
                        setShowSideBar={setShowSideBar}
                        />
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