import { useContext } from 'react';
import { FooterContainer } from './Footer.style';
import FooterBg from './../../assets/img/vs-footer-bg.png';
import FooterLightBg from './../../assets/img/light-bg.png';
import { Row, Col, Container } from 'react-bootstrap'
import FooterLink1 from '../footerlink1/FooterLink1';
import LinkedInImg  from './../../assets/img/linkedin.png';

import { ThemeContext } from '../../Theme';


function Footer() {

    const { theme } = useContext(ThemeContext);
    return ( 
        <FooterContainer 
        style={ theme === 'dark-theme' ? { 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${FooterBg})`} 
            : {backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundImage: `url(${FooterLightBg})`}
        }>
            <Container>
            <Row>
                <Col md={8}>
                    <div className='footer-container'>
                        <h1>Overview</h1>
                        <p>I'm a freelance web designer/developer working remotely with clients in London & across the country. If you're looking for a quote, or even just some advice then please don't hesitate to get in touch, I'm here to help!</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='footer-container__wrapper'>
                        <h2>GET IN TOUCH</h2>
                        <a href="mailto:hello@vinodsoba.co.uk">hello@vinodsoba.co.uk</a>
                        <span className='social-icons'>
                        <img src={LinkedInImg} width='20' height='20'/>
                        </span>
                        
                    </div>
                </Col>
                <Container>
                    <Row>
                        <h1 style={{ fontSize: '32px', color: '#62FAED' }}>Pages</h1>
                        <hr style={ theme === 'light-theme' ? { width: '100%', border: '1px #ffffff solid' } : { width: '100%', border: '1px #0D9488 solid' } }/>
                        <Col md={4}>
                            <FooterLink1 />
                        </Col>
                    </Row>
                </Container>
            </Row>  
            </Container>
        </FooterContainer>
     );
}

export default Footer;