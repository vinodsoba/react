import React, { useEffect, useState } from 'react';

// style
import './style.css'
// axios
import useFetchData  from '../../hooks/use-fetch-data';

import axios from 'axios';

// bootstrap

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import  GlobalButton  from '../globalbutton/GlobalButton';




const slideTextUp = {
    visible: { opacity: 1, scale: 1, transition: { type: 'ease', duration: 1.4 }  },
    hidden: { opacity: 0, scale: 0 }
}

function WhatIDo() {
    const { data } = useFetchData();
    const [ ref, inView ] = useInView();
    const [ media, setMedia ] = useState([]);

    const controls = useAnimation();
    
    useEffect(() => {
        const fetchMedia = async () =>  {
            try {
                const {media: response } = await axios.get("https://www.vinodsoba.co.uk/wp-json/wp/v2/media");
                setMedia(response);    
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchMedia();
        console.log(media);
    },[]);

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

   
  return (
    <>
        <div className='what-i-do'>
         {
            data.map(item => item.id === 530 ? 
            (                  
            
            <Row>
                  <div className="header-title" dangerouslySetInnerHTML={{__html: item.acf.heading_title } } />   
                <Col md={4}>
                    <motion.div
                    ref={ref}
                    animate={controls}
                    variants={slideTextUp}
                    initial="hidden"
                    >
                    <Card className='card-items'>
                        <img class="card-img-top" variant="top" width="95px" height="102px" src={item.acf.card_group.what_i_do_image}/>
                        <hr />
                        <Card.Title key={item.id}>{item.acf.card_group.title}</Card.Title>                        
                        <GlobalButton href={item.acf.card_group.cta_url}>{item.acf.card_group.cta_text}</GlobalButton>    
                    </Card>
                    </motion.div>
                </Col>

                <Col md={4}>
                    <motion.div
                    ref={ref}
                    animate={controls}
                    variants={slideTextUp}
                    initial="hidden"
                    >
                    <Card className='card-items'>
                        <img class="card-img-top" variant="top" width="95px" height="102px" src={item.acf.card_group_2.what_i_do_image_2}/>
                        <hr />
                        <Card.Body>
                            <Card.Title key={item.id}>{item.acf.card_group_2.title}</Card.Title>
                        </Card.Body>
                        <GlobalButton href={item.acf.card_group_2.cta_url}>{item.acf.card_group_2.cta_text}</GlobalButton>
                    </Card>
                    </motion.div>
                </Col>

                <Col md={4}>
                    <motion.div
                    ref={ref}
                    animate={controls}
                    variants={slideTextUp}
                    initial="hidden"
                    >
                    <Card className='card-items'>
                        <img class="card-img-top" variant="top" width="95px" height="102px" src={item.acf.card_group_3.what_i_do_image_3}/>
                        <hr />
                        <Card.Body>
                            <Card.Title key={item.id}>{item.acf.card_group_3.title}</Card.Title>
                        </Card.Body>
                        <GlobalButton href={item.acf.card_group_3.cta_url}>{item.acf.card_group_3.cta_text}</GlobalButton>
                    </Card>
                    </motion.div>
                </Col>
            </Row>
         
        
            ) : null 
        )}
        </div>
    </>
  )
}

export default WhatIDo