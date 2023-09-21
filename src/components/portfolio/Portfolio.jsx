import React, { useState, useEffect }  from 'react';
import { Link, useNavigate } from 'react-router-dom';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// axios
import axios from 'axios';

// import stylesheet
import './portfolio.css';

// url
const URL = "http://localhost/vinodsoba/wp-json/wp/v2/portfolio";

function Portfolio() {
    const history = useNavigate();

    const [ portfolio, setPortfolio ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
    axios.get(URL)
    .then((response) => {
        setPortfolio(response.data)
    });
    setIsLoading(true);
    }, []);

    if(!portfolio) return null;

    console.log(portfolio);

    const handleclick = (event) => {

        const id = event.currentTarget.dataset.id;

        history(`/work/portfoliodetail/${id}`);
    }

    if(isLoading){  
        return (
            <Row>
                {
                portfolio.map(item =>             
                <Col md={4}>
                    <div className="card">
                    <img className="card-img-top" src={item.acf.portfolio_image} alt={item.title.rendered} />
                        <div className="card-body">
                            <h3  onClick={handleclick} data-id={item.id} key={item.id} className="card-title">{item.title.rendered}</h3>
                            <h5>{item.acf.portfolio_title}</h5>
                        </div>
                        <Link to={item.acf.cta_url}>{item.acf.cta_text}</Link>                        
                    </div>
                </Col>
                )}
            </Row>
          )

    } else {
        return <div>Loading...</div>
    }
 
}

export default Portfolio;