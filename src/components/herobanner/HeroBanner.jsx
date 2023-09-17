import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { HeroWrapper } from './HeroBanner.style';

// import style
import './style.css'

// import button
import Button from '../button/Button';

//import planet
import Galaxy from '../galaxy/Galaxy';

// import stars bg
import StarBackground from './../../assets/img/bg-stars.png';
class HeroBanner extends Component {
    state = { 
        data: [],
        isLoading: false
     } 

     componentDidMount(){
        axios.get("http://localhost/vinodsoba/wp-json/wp/v2/pages")
        .then(res => this.setState({
            data: res.data,
            isLoading: true
        }))
        .catch(err => console.log(err))
     }
    render() {
        const { data, isLoading } = this.state;
        
        console.log(data);
        if(isLoading) {
            return (
                <HeroWrapper>
                    {
                       data.map( image => image.id === 6 ? 
                  
                        <div key={image.id} className={image.acf.choose_background_colour}>
                            <div style={{ backgroundImage : `url(${StarBackground})` }}>
                            <Row>
                                <Col md={12}><h1>{image.acf.hero_banner_title} </h1> </Col>
                                <Col md={12}><h4>{image.acf.hero_banner_subtitle}</h4></Col>
                                <Col md={12}><button>{image.acf.cta_text}</button></Col>
                                <Galaxy />
                            </Row>
                            </div>
                        </div>
                        : null
                        )
                    }
                        
                </HeroWrapper> 
            );
        }
        else {
            return <div>Loading Image...</div>
        }
        
    }
}
 
export default HeroBanner;