import React, { Component } from 'react'
import axios from 'axios'
import HeroBanner from '../herobanner/HeroBanner';

class Home extends Component {
    state = { 
        data: [],
        isLoading: false,
       
     } 

     componentDidMount() {
        axios.get("https://dev.vinodsoba.co.uk/wp-json/wp/v2/pages")
        .then(res => this.setState({
            data: res.data,
            isLoading: true
        }))
        .catch(err => console.log(err))
     }

    render() { 
        const { data, isLoading } = this.state;

        console.log(data);

        if(isLoading){
            return (
                <>
                {
                    data.map( item => item.id === 6 ?
                        <div dangerouslySetInnerHTML={{__html: item.content.rendered}} />
                    : null
                    )
                }
                <HeroBanner/>
                </>
               
            );
        } else {
            return <div>Loading...</div>
        }
       
    }
}
 
export default Home;