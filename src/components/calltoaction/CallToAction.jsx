import React from 'react'
import { Container } from 'react-bootstrap'
import  { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <Container>
      <div className="port-col-wrap">
            <h1>Looking  to start a new project?</h1>
            <h4>if you have a project in mind and want some initial advice then email me at <Link to="mailto:hello@vinodsoba.co.uk">hello@vinodsoba.co.uk</Link>. Lets work together and bring your ideas to life!</h4>
        </div>
    </Container>    
  )
}

export default CallToAction