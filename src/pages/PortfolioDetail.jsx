import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';

// import axios
import axios from 'axios';

function PortfolioDetail() {
    const { id } = useParams();
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.get(`https://www.vinodsoba.co.uk/wp-json/wp/v2/portfolio/${id}`)
        .then((response) => setData({
            data: response.data,
            title: response.data.title.rendered,
            portfolioTitle: response.data.acf.portfolio_title,
            portfolioContent: response.data.content.rendered,
            portfolioImage: response.data.acf.portfolio_image,
        }))
        
    }, [])
    console.log(data);
  return (
    <div>
        <h1>Portfolio Detail</h1>
        <h4 key={data.id}>{data.title}</h4>
        <h1>{data.portfolioTitle}</h1>
        <img src={data.portfolioImage} alt={data.title} />
        <div dangerouslySetInnerHTML={{__html: data.portfolioContent}} />
    </div>
  )
}

export default PortfolioDetail