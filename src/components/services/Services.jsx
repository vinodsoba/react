import React, { Component } from 'react';
import axios from 'axios';

// stylesheet
import './style.css'
import { Link } from 'react-router-dom'

// icon
import Arrow from './../../assets/img/icon/Arrow 1.svg'

class Services extends Component {
    state = { 
        data: []
     } 

     componentDidMount(){
        axios.get("/wp-json/wp/v2/pages")
        .then(res => this.setState({
            data: res.data,
        }))
        .catch(err => console.log(err))
     }
    render() { 
        const { data } = this.state;
        console.log(data);
        return (
            <div className="services-section">
                {
                data.map(service => service.id === 6 ? 
                
                     <div className='services-container' key={service.id}>
                        <div className='service-title' dangerouslySetInnerHTML={{__html: service.acf.services_title }} />
                        <h2>{service.acf.services_description}</h2>
                        <Link className="cta" to={service.acf.services_url}>{service.acf.services_cta_text}<img src={Arrow} alt="arrow" /></Link>
                    </div>
                                                    
                : null
                )
                }
            </div>
        );
    }
}
 
export default Services;