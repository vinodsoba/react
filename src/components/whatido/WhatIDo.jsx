import React, { useEffect } from 'react';

// style
import './style.css'
// axios
import useFetchData  from '../../hooks/use-fetch-data';

// bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const slideTextUp = {
    visible: { opacity: 1, scale: 1, transition: { type: 'ease', duration: 1.4 }  },
    hidden: { opacity: 0, scale: 0 }
}

function WhatIDo() {

    const { data } = useFetchData();

    const controls = useAnimation();

    const [ ref, inView ] = useInView();
    
    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
    }, [controls, inView])
  return (
    <>
        <div>WhatIDo</div>
         {
            data.map(item => item.id === 6 ? 
            (
            <Container>
                  <Row>
                <Col md={4}>
                    <motion.div
                    ref={ref}
                    animate={controls}
                    variants={slideTextUp}
                    initial="hidden"
                    >
                    <Card className='card-items'>
                        <Card.Img variant="top" width="95px" height="102px" src={item.acf.card_group.image}/>
                        <hr />
                        <Card.Body>
                            <Card.Title key={item.id}>{item.acf.card_group.title}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href={item.acf.card_group.cta_url}>{item.acf.card_group.cta_text}</Button>
                        </Card.Body>
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
                    <Card.Img variant="top" width="95px" height="102px" src={item.acf.card_group_2.image}/>
                    <hr />
                    <Card.Body>
                        <Card.Title key={item.id}>{item.acf.card_group_2.title}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" href={item.acf.card_group_2.cta_url}>{item.acf.card_group_2.cta_text}</Button>
                    </Card.Body>
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
                <Card.Img variant="top" width="95px" height="102px" src={item.acf.card_group_3.image}/>
                <hr />
                <Card.Body>
                    <Card.Title key={item.id}>{item.acf.card_group_3.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" href={item.acf.card_group_3.cta_url}>{item.acf.card_group_3.cta_text}</Button>
                </Card.Body>
                </Card>

                </motion.div>
                </Col>
            </Row>
            </Container>
        
            ) : null 
        )}

    </>
  )
}

export default WhatIDo