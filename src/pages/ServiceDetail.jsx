import  React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

// bootstrap 
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';


import { ServiceDetailWrapper } from './Servicedetail.style';
import Layout from '../components/layout/Layout';


function ServiceDetail() {
  const { id } = useParams();
  const [ data, setData ] = useState([]);

  let base64 = require("base-64");

  const username = `${process.env.REACT_APP_API_USERNAME}`;
  const password = `${process.env.REACT_APP_API_PASSWORD}`;
  
  useEffect(() => {
    axios.get(`/wp-json/wp/v2/service/${id}`, {
      
        headers: {
            Authorization: "Basic " + base64.encode(username + ':' + password),
        }
    
    })
    .then((response) => setData({
      data: response.data,
      title: response.data.title.rendered,
      myServices: response.data.content.rendered,
      headerTitle: response.data.acf.header_title,
      homePageBanner: response.data.acf.home_page_banner,
      servicesContent: response.data.acf.my_services,
    })
    )
    
  }, [])
 
    console.log(data);
  return (
      <Layout>
         <ServiceDetailWrapper>
      <div className='header-hero-container' style={{ backgroundImage: `url(${data.homePageBanner})`}}>
          <h1>{data.title}</h1> 
      </div>
      <section className='port-col-wrap'>
      <Container>
          <h2><div dangerouslySetInnerHTML={{__html: data.headerTitle}} /></h2>
          <Row>
          <Col md={6}>
            <img src={data.homePageBanner} width="100%"  alt={data.HeaderTitle}/>
          </Col>
          <Col md={6}>
          <div className='service-detail'>
              <div dangerouslySetInnerHTML={{__html: data.myServices}} />
              <div dangerouslySetInnerHTML={{__html: data.servicesContent }} />
          </div>
          </Col>
          </Row>
        </Container>
      </section>
    </ServiceDetailWrapper>
      </Layout>      
  )
}

export default ServiceDetail;