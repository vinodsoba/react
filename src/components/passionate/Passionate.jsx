import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './style.css';

function Passionate() {

    const [ data, setData ] = useState([]);

    const fetchData = async () => {
        try{
            const response = await axios.get("https://dev.vinodsoba.co.uk/wp-json/wp/v2/pages");
            setData(
               response.data, 
            );
        } catch (error) {
            console.error("Error fetching data", error );
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);
  return (
    <div>
        {
            data.map(item => item.id === 6 ? 
            <div className='passionate-wrapper' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${item.acf.select_background_type.image.url})` }}>
               <div className='passionate-container__background'>
                <p>{item.acf.passionate_title}</p>
                <h2 key={item.id}>{item.acf.title_h2}</h2>
                <Link className="cta" to={item.acf.cta_button.cta_link}>{item.acf.cta_button.cta_text}</Link>
               </div>
                
            </div>
            : null
            )
        }
    </div>
  )
}

export default Passionate