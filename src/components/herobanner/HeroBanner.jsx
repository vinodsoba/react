import React, { Component } from 'react'
import axios from 'axios'
class HeroBanner extends Component {
    state = { 
        images: [],
        isLoading: false
     } 

  

     componentDidMount(){
        axios.get(`http://localhost/vinodsoba/wp-json/wp/v2/posts?_embed`)
        .then(res => this.setState({
            images: res._embedded['wp:featuredmedia']['0'].source_url,
            isLoading: true
        }))
        .catch(err => console.log(err))
     }
    render() {
        const { images, isLoading } = this.state;
        
        console.log(images);
        if(isLoading) {
            return (
                <>
                    {
                        images.map( image => image.id === 8 ? 
                        <img src={image.guid.rendered} />    
                        
                        : null
                        )
                    }
                </> 
            );
        }
        else {
            return <div>Loading Image...</div>
        }
        
    }
}
 
export default HeroBanner;