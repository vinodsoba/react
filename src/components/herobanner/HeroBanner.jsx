import React, { useState, useContext } from 'react';

// import bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import axios
import axios from 'axios';

// import style
import './style.css';

import { ThemeContext } from '../../Theme';

// import planet;
import Galaxy from '../galaxy/Galaxy';

// import stars backgorund
import StarBackground from './../../assets/img/bg-stars.png';


import { HeroWrapper } from './HeroBanner.style';



// axios fetch url
const URL = "http://localhost/vinodsoba/wp-json/wp/v2/pages";

 function HeroBanner() {
    const { theme } = useContext(ThemeContext);

    const [ post, setPost ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setPost(response.data);

        });

        setIsLoading(true);
    }, []);

    if(!post) return null;

    if(isLoading){
      
      return (
        <HeroWrapper>
            {
                post.map( image => image.id === 6 ? 
          
                <div key={image.id} className={image.acf.choose_background_colour}>
                    <div style={theme === 'light-theme' ? { background: '#f0f8ff', height: '100%' }  : {backgroundImage: `url(${StarBackground})`} }>
                    <Row>
                        <Col md={12}><h1>{image.acf.hero_banner_title} </h1> </Col>
                        <Col md={12}><h4 style={theme === 'dark-theme' ? {color: 'var(--text-primary)'} : {color: 'var(--text-primary)'}} >{image.acf.hero_banner_subtitle}</h4></Col>
                        <Col md={12}><button>{image.acf.cta_text}</button></Col>
                        <Galaxy />
                    </Row>
                    </div>
                </div>
                : null
                )
            }      
          </HeroWrapper> 
      )
    } else {
      return <div>Loading...</div>
    }

  
}

export default HeroBanner;