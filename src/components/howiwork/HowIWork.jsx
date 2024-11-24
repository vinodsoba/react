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
        data.map(item => item.id === 7 ? (
          <>
           <div className="header-title" dangerouslySetInnerHTML={{__html: item.acf.how_i_work_title } } />
              <h2><div className='sub-header-title' dangerouslySetInnerHTML={{__html: item.acf.content}} /></h2>
          </>    
        
          )
        : null
        )
      }
        <Link className="cta-arrow">View Services <Icon.ArrowRight /></Link>
      </div>
    </div>
    </Container>
   
  )
}

export default HowIWork
