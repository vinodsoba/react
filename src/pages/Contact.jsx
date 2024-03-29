import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../components/form/Form';

export default function Contact() {
  return (
    <div className='ctc-form'><h1>Contact</h1>

    <Row>
      <Col md={6}>
        <Form />
      </Col>
      <Col md={6}>
        <h1>socials</h1>
      </Col>
    </Row>
      
    </div>
    
  )
}
