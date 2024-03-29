import React, { useEffect } from 'react';
import useFetchData from '../../hooks/use-fetch-service';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import  GlobalButton  from '../globalbutton/GlobalButton';
import './style.css';

const slideTextUp = {
    visible: { opacity: 1, scale: 1, transition: { type: 'ease', duration: 1.4 }  },
    hidden: { opacity: 0, scale: 0 }
}


function CardItem() {
    const { data } = useFetchData();

    const [ ref, inView ] = useInView();

    const controls = useAnimation();

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <>           
            {
            data.map(item => 
            <Col md={3}>
                <Card className='card-items'>
                <motion.div
                ref={ref}
                animate={controls}
                variants={slideTextUp}
                initial="hidden"
                >
                <Card.Body>
                    <img src={item.acf.my_service_icon} />
                    <hr width="100%" />
                    <p>{item.title.rendered}</p>
                </Card.Body>
                
            </motion.div>
            </Card>
            </Col>
            )
            }    
            <div className="cta-container"><GlobalButton /></div>  
        </>
    )
}

export default CardItem