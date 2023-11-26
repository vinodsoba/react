import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion'
// import bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import style
import './style.css';

import { ThemeContext } from '../../Theme';

// import planet;
import Galaxy from '../galaxy/Galaxy';

// import stars backgorund
import StarBackground from './../../assets/img/bg-stars.png';

import { HeroWrapper } from './HeroBanner.style';

// use Fetch Data
import useFetchData from '../../hooks/use-fetch-data';


function HeroBanner( props ) {
    const { theme } = useContext(ThemeContext);

    const { data } = useFetchData();

    console.log(data);

      return (
        <HeroWrapper className='hero-wrapper'>
            {
                data.map( item => item.id === 530 ? 
                   
                <div key={item.id} className={item.acf.choose_background_colour}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  
                 </div> 
                    <div style={theme === 'light-theme' ? { background: 'rgb(110 176 239)', height: '100%' }  : {height: '100%', backgroundImage: `url(${StarBackground})`} }>
                    <Row>
                        <Col md={12}>
                            <div
                                style={theme === 'dark-theme' ? {color: '#62FAED'} : {color: '#000000'}}>
                                <h1>
                                <motion.div 
                                initial={{ x: '-100vw' }}
                                animate={{ x:  0 }} 
                                transition={{ type: 'ease', duration: 0.5, delay: 0.1 }}
                                dangerouslySetInnerHTML={{__html: item.acf.hero_banner_title}}>
                                </motion.div>
                                </h1>
                            </div> 
                        </Col>
                        <Col md={12}><h4 style={theme === 'dark-theme' ? {color: 'var(--text-primary)'} : {color: 'var(--text-primary)'}} >{item.acf.hero_banner_subtitle}</h4></Col>
                        <Col md={12}><button>{item.acf.button_text}</button></Col>
                        <Galaxy />
                    </Row>
                    </div>
                </div>
                : null
                )
            }      
        </HeroWrapper> 
      )
}

export default HeroBanner;