import React, { Component } from 'react';
// axios to query the API
import axios from 'axios';

// module
import Portfolio from '../components/portfolio/Portfolio';

const URL = "https://www.vinodsoba.co.uk/wp-json/wp/v2/pages?limit=1";

class Work extends Component {
    state = {  
        data: [],
        isLoading: false
    } 

    componentDidMount() {
        axios.get(URL)
        .then(response => this.setState({
            data: response.data,
            isLoading: true
        }))
        .catch(err => console.log(err))
    }
    render() { 
        const { data, isLoading } = this.state;
        console.log(data);
        return (
            <>
                 <div className='header-hero-container'>
                    { data.map(item => item.id === 61 ? 
                        <h1 key={item.id}>{item.title.rendered}</h1>  
                    : null  
                    )}
                </div>
                <Portfolio />
            </>
           
            
        );
    }
}
 
export default Work;