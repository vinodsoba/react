import React, { Component } from 'react';
import {Link } from 'react-router-dom';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//axios
import axios from 'axios';

// import stylesheet
import './portfolio.css';

class Portfolio extends Component {
    state = { 
        data: [],
        isLoading: false
     } 

     componentDidMount(){
        axios.get("http://localhost/vinodsoba/wp-json/wp/v2/portfolio")
        .then(response => this.setState({
            data: response.data,
            isLoading: true
        }))
        .catch(err => console.log(err))
    }

    render() { 
        const { data, isLoading } = this.state;

        if(isLoading) {
            return (
                <Row>
                {
                data.map(item =>             
                <Col md={4}>
                    <div className="card">
                    <img className="card-img-top" src={item.acf.portfolio_image} alt={item.title.rendered} />
                        <div className="card-body">
                            <h3 key={item.id} className="card-title">{item.title.rendered}</h3>
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
}
 
export default Portfolio;
