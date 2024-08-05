import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useFetchData from '../../hooks/use-fetch-portfolio';

// import stylesheet
import './portfolio.css';

function Portfolio() {
    const { data } = useFetchData();

    const history = useNavigate();

    const handleclick = (event) => {

        const id = event.currentTarget.dataset.id;

        history(`/work/portfoliodetail/${id}`);
    }

    return (
        <div className='portfolio-container'>
            <Row>
            {
            data.map(item =>             
            <Col md={4}>
                <div className="portfolio-card card">
                <img className="card-img-top" src={item.acf.home_page_banner} alt={item.title.rendered} />
                    <div className="card-body">
                        <h3  onClick={handleclick} data-id={item.id} key={item.id} className="card-title">{item.title.rendered}</h3>
                        <h5>{item.acf.portfolio_title}</h5>
                    </div>
                    <Link to={item.acf.cta_banner}>{item.acf.cta_text}</Link>                        
                </div>
            </Col>
            )}
        </Row>

        </div>
        
        )

}

export default Portfolio;
