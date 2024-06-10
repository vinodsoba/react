import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchData() {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    let base64 = require('base-64');

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const {data: response } = await axios.get(
                    "http://localhost/vs/wp-json/wp/v2/portfolio",
                    {
                        headers: {
                            Authorization: "Basic " + base64.encode(username + ':' + password),
                        }

                    });
                setData(response);    
            } catch (error) {
                console.log(error.message)
            }

            setLoading(false);
        }

        fetchData();
    }, []);

    if(!data) return null;

  return {
    data,
    loading,
  };
};

export default useFetchData;