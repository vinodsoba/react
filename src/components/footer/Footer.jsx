
import { FooterContainer } from './Footer.style';
import FooterBg from './../../assets/img/vs-footer-bg.png';
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
    return ( 
        <FooterContainer style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${FooterBg})`}}>
            <Row>
                <Col md={6}>
                    <div className='footer-container'>
                    <h1>Overview</h1>
                    <p>I'm a freelance web designer/developer working remotely with clients in London & across the country. If you're looking for a quote, or even just some advice then please don't hesitate to get in touch, I'm here to help!</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='footer-container__wrapper'>
                    <h2>GET IN TOUCH</h2>
                    <a href="mailto:hello@vinodsoba.co.uk">hello@vinodsoba.co.uk</a>
                    </div>
                </Col>
                <Container>
                    <Row>
                        <h1 style={{ fontSize: '32px', color: '#62FAED' }}>Pages</h1>
                        <hr style={{ width: '100%', border: '1px #0D9488 solid'}}/>
                    </Row>
                </Container>
            </Row>  
        </FooterContainer>

     );
}

export default Footer;