import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'

export default function LayoutDashboard({ children }) {

  return (
    <Row>
      <Col md={2}><Sidebar children={children}/></Col>
      <Col md={10}>{children}</Col>
    </Row>   
  )
}
