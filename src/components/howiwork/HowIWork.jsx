import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import useFetchData from '../../hooks/use-fetch-data';
import './style.css';

function HowIWork() {
  const { data } = useFetchData([]);

  return (
    <Container>
       <div className='how-i-work'>
       <div className='how-i-work-container'>
      {
        data.map(item => item.id === 530 ? (
          <>
           <div className="header-title" dangerouslySetInnerHTML={{__html: item.acf.header_title } } />
              <h2><div className='sub-header-title' dangerouslySetInnerHTML={{__html: item.acf.sub_header_title}} /></h2>
          </>    
        
          )
        : null
        )
      }
      
      </div>
      <Link>View Services <Icon.ArrowRight className='cta-arrow'/></Link>
    </div>
    </Container>
   
  )
}

export default HowIWork
