import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { ThemeContext } from '../../Theme';

import useFetchData from '../../hooks/use-fetch-data';
import { PassionateContainer } from './PassionateWrapper';

import './style.css';
import { Container } from 'react-bootstrap';

function Passionate() {
    const { theme } = useContext(ThemeContext);
    const { data } = useFetchData();

  return (
    <PassionateContainer>
        {
            data.map(item => item.id === 530 ?
            <div className='passionate-wrapper' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundImage: `url(${item.acf.passionate_image})` }}>
                <Container>
                  <div className='passionate-container__background'>
                    <p style={theme === 'light-theme' ? { color: 'var(--text-primary-dark)'} : {color: 'var(--text-primary-light)'} }>{item.acf.passionate_title}</p>
                    <h2 style={theme === 'light-theme' ? { color: 'var(--text-primary-dark)'} : {color: 'var(--text-primary-light)'} } key={item.id}>{item.acf.title_h2}</h2>
                    <Link className="cta" to={item.acf.button_cta_link}>{item.acf.button_cta_text}</Link>
                    </div>
                  </Container>
               </div>
            : null
            )
        }
    </PassionateContainer>
  )
}

export default Passionate
