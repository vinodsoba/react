import React, { Component } from 'react';

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
                <div>
                {
                data.map(item => 
                    <Row>
                        <Col md={4}>
                            <h1 key={item.id}>{item.title.rendered}</h1>
                            <h2>{item.acf.portfolio_title}</h2>
                            <img src={item.acf.portfolio_image} alt={item.title.rendered} />

                        </Col>
                         
                    </Row>
                 
                )}
                </div> 
            )
        } else {
            return <div>Loading...</div>
        }
    }
}
 
export default Portfolio;
