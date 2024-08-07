// bespoke

import React, { useEffect } from 'react';

// axios
import useFetchData  from '../../hooks/use-fetch-data';

import { Col, Row, Container } from 'react-bootstrap';


//motion framer
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";


import './style.css';

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: {   duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
}

const slidingText = {
    visible: { x: 0, transition: {  type: "ease", duration: 1 } },
    hidden:  { x: '50vw'}
}

const BespokeResponsive = () => {
    const { data } = useFetchData();
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() =>{
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

  return (
    
        <div className="bespoke-wrapper">
         {data.map(item => item.id === 530 ?  (
            <Container>
                  <Row>
                <Col md={5}>
                <motion.div 
                ref={ref}
                animate={controls}
                variants={squareVariants}
                initial="hidden"
                className="bespoke-container__image">
                    <img src={item.acf.bespoke_image} alt={item.title.rendered} width="100%"/>
                </motion.div>
                </Col>
                <Col md={7}>
                <motion.div 
                    ref={ref}
                    animate={ controls }
                    variants={slidingText}
                    initial="hidden" 
                    className="bespoke-container__content">
                        <h2><div
                        dangerouslySetInnerHTML={{__html: item.acf.bespoke_title}}
                        /></h2>
                        <div dangerouslySetInnerHTML={{__html: item.acf.bespoke_content }} />
                       <a href={item.acf.bespoke_button.cta_url} className='cta'>{item.acf.bespoke_button.cta_text}</a>
                </motion.div>
                </Col>
                </Row>
            </Container>
            )
            : null      
            )
        }
        </div> 
  )
}

export default BespokeResponsive