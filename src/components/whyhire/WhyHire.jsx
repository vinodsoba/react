import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import useFetchData from '../../hooks/use-fetch-data'
import { Link } from 'react-router-dom';

function WhyHire() {
  const { data } = useFetchData([]);

  console.log(data);

  if(!data) return null;

  return (
    <>
      <div className='why-content-cont py-2'>
      { data.map(index => index.id == 530  ? (
        <Container>
          <Row>
          <div className='why-hire-me py-5 header-title'dangerouslySetInnerHTML={{__html: index.acf.why_title}}/>
          <div className='why-cont-wrapper d-flex d-row py-3'>
            <div className='why-cont--content'>
              <Col md={7} key={index.id}>
                <div className="text-start" style={{maxWidth: '100%', width: '700px'}} dangerouslySetInnerHTML={{__html: index.acf.why_content}}/>
                <Link className="cta-plain" /*</Col>to={index.acf.why_button.cta_url}*/>View Work</Link>
              </Col>
            </div>
            <Col md={5}>
              <div className='why-cont--image'>
                <img src={index.acf.why_image}/>
              </div>
            </Col>
        </div>
        </Row>
        </Container>
      ) : null 
      )
      }
      </div>
    </>
  )
}

export default WhyHire