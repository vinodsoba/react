import React,{ useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const CourseBuildGame = () => {
  const [ data, setData ] = useState([]);

    const { id }  = useParams();

    let base64 = require('base-64');

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

   useEffect(() => {
    axios.get(`/wp-json/wp/v2/posts/${id}`, {
        headers: {
            Authorization : "Basic " + base64.encode(username + ':' + password)
        }
    })
    .then((response) => setData({
        data: response.data,
        id: response.data.id,
        content: response.data.content.rendered,
    }) 
    ).catch((err) => {console.log('error', err)})
   }, [])

   console.log(data);
   if(!data){ return null }
  return (
    <div className="courses-container">
      <h1>Build a game</h1>
      <div className='courses'>
      <div className="course--content" dangerouslySetInnerHTML={{__html: data.content}} />
      </div>
    </div>
  )
}

export default CourseBuildGame