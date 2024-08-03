import React, { useEffect, useState } from 'react';
// style
import { WhatIDoWrapper } from './WhatIDo.style';
// axios
import axios from 'axios';
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import  GlobalButton  from '../globalbutton/GlobalButton';
import ServiceCard from '../card/ServiceCard';

const slideTextUp = {
    visible: { opacity: 1, scale: 1, transition: { type: 'ease', duration: 1.4 }  },
    hidden: { opacity: 0, scale: 0 }
}

function WhatIDo(props) {
    const [ ref, inView ] = useInView();
    const [ media, setMedia ] = useState([]);
    const controls = useAnimation();
    
    useEffect(() => {
        const fetchMedia = async () =>  {
            try {
                const {media: response } = await axios.get("/wp-json/wp/v2/media");
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
    <WhatIDoWrapper>
        <Container>
        <div className='what-i-do'>                     
            <Row>   
            </Row>
        </div>
    </Container>
    </WhatIDoWrapper>
  )
}

export default WhatIDo