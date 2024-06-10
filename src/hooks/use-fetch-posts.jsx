import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetchPosts() {
    const [data, setdata] = useState([])
    const [ loading , setLoading ] = useState(true)

    const base64 = require('base-64')

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

    const URL = 'http://localhost/vs/wp-json/wp/v2/posts';

    const fetchPosts = async () => {
        try {
            
            const {data: response } = await axios.get(URL, {
            headers: {
                Authorization: 'Basic ' + base64.encode(username + ':' + password)
                    }
            })
            setdata(response)
        } catch (error) {
            {console.log('posts not retrieved', error)}
        }
    }

    useEffect(() => {
      if(fetchPosts){
        setLoading(true);
        fetchPosts();
      }
    }, []);
    console.log(data);
    if(!data) return null;
  return {
    data,
    loading  
  }
}

export default useFetchPosts;