import React, { Component } from 'react'
import Home from '../components/home/Home';
import Services from '../components/services/Services';

class HomePage extends Component {    
    render() { 
        return (
            <div>
                <Home />
                <Services />
            </div>
        );
    }
}
 
export default HomePage;