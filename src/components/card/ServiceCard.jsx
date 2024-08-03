import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import useFetchService from '../../hooks/use-fetch-service'

import { Row, Col, Card, CardHeader, CardBody, CardFooter  } from 'react-bootstrap'
import GlobalButton from '../globalbutton/GlobalButton'
import { ButtonWrapper } from '../globalbutton/GlobalButton.style'
import axios from 'axios'

function ServiceCard() {
    const { data } = useFetchService();
    const [ media, setMedia ] = useState();

    let base64 = require("base-64");

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;
     
    const history = useNavigate();

    const handleclick = (event) => {
    const id = event.currentTarget.dataset.id;
      history(`/services/servicedetail/${id}`);
    }

    useEffect(() => {
      const fetchMedia = async () => {
        try {
          const { data: response } = await axios.get('/wp-json/wp/v2/media?per_page=30', {
            headers: {
              Authorization: 'Basic ' +  base64.encode(username + ':' + password)
            }
          }
        
        );
          setMedia(response)
        } catch (error) {
         console.log("Media is not being passed",error);
        }   
      }
      fetchMedia();
    },[]);

console.log(media);

  return (
    <div className='py-4'>
        <h1 className='text-white'>What I do</h1>
       <Row>
            {
            data.map(item  =>
            <Col md={6}>
                <Card className='d-flex justify-content-between'>
                  <CardHeader><p className="text-black" key={item.id}>{item.title.rendered}</p></CardHeader>
                  <CardBody className='text-bg-light'>
                    {
                      media.map((index) => index.id == 196 ? 
                      <div><img src={index.source_url} key={index.id} /></div> 
                      : null)
                    }
                    
                  </CardBody>
                  <CardFooter>
                    <ButtonWrapper className="cta" data-id={item.id} onClick={handleclick}>Learn More</ButtonWrapper>
                  </CardFooter>
                </Card>
            </Col>
             )
            }
        </Row> 
    </div>
  )
}
export default ServiceCard