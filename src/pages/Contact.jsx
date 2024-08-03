import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../components/form/Form';
import Layout from '../components/layout/Layout';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <Layout>
       <div className='ctc-form d-flex justify-content-center flex-column'><h1>Contact</h1>
       <Container>
       <Row>
          <Col md={6}>
            <Form />
          </Col>
          <Col md={6}>
            <h1>socials</h1>
          </Col>
        </Row>
       </Container>
      </div>
    </Layout>
  )
}
