import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// import axios
import axios from 'axios';
import Layout from '../components/layout/Layout';

function PortfolioDetail() {
    const { id } = useParams();
    const [ data, setData ] = useState([]);

    let base64 = require("base-64");

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

    useEffect(() => {
        axios.get(`/wp-json/wp/v2/portfolio/${id}`, {
          headers: {
            Authorization: "Basic " + base64.encode(username + ':' + password),
        }
        })
        .then((response) => setData({
            data: response.data,
            title: response.data.title.rendered,
            portfolioTitle: response.data.acf.portfolio_title,
            portfolioContent: response.data.content.rendered,
            portfolioImage: response.data.acf.portfolio_image,
        }))
        
    }, [])
  return (
    <Layout>
      <div className='header-hero-container'>
        <Row>
            <h1>{data.title}</h1>  
        </Row>
      </div>
      <Container>
        <Row>
          <Col md={6}>
          <h1>{data.portfolioTitle}</h1>
          <div dangerouslySetInnerHTML={{__html: data.portfolioContent}} />
          </Col>
          <Col md={6}>
           <img src={data.portfolioImage} alt={data.title} />
          </Col>
        </Row>
      </Container>            
    </Layout>
    
  )
}

export default PortfolioDetail