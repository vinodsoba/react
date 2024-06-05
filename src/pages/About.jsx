import React from 'react'
import AboutMe from '../components/aboutme/AboutMe'
import Layout from '../components/layout/Layout'
import CallToAction from '../components/calltoaction/CallToAction'
import { Container } from 'react-bootstrap'

export default function About() {
  return (
    <Layout>
      <div className='header-hero-container'>
        <h1>About Me</h1>
      </div>
      <Container>
        <AboutMe />
        <CallToAction/>
      </Container>
    </Layout>
  )
}
