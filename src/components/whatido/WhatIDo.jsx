import React, { useEffect, useState } from 'react';

import CardItem from '../card/CardItem';
// style
import { WhatIDoWrapper } from './WhatIDo.style';
// axios
import useFetchData  from '../../hooks/use-fetch-data';

import axios from 'axios';

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import  GlobalButton  from '../globalbutton/GlobalButton';


const slideTextUp = {
    visible: { opacity: 1, scale: 1, transition: { type: 'ease', duration: 1.4 }  },
    hidden: { opacity: 0, scale: 0 }
}

function WhatIDo(props) {
    const { data } = useFetchData();
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
         {
            data.map(item => item.id === 530 ? 
            (                       
            <Row>
                  <div className="header-title" dangerouslySetInnerHTML={{__html: item.acf.heading_title } } />   
                <CardItem /> 
            </Row>
            ) : null 
        )}
        </div>
    </Container>

    </WhatIDoWrapper>
    
  )
}

export default WhatIDo
