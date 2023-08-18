import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import { HeaderWrapper } from './Header.style';

function Header() {
    return ( 
        <HeaderWrapper>
            <Row>
                <Col md={6}><Logo/></Col>
                <Col md={6}><Navigation/></Col>
            </Row>
        </HeaderWrapper>
     );
}

export default Header;