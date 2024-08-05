import React, { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchData() {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    let base64 = require('base-64');

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

    useEffect(() => {        
        const fetchData = async () =>  {
            setLoading(true);
            try {
                const {data: response } = await axios.get(
                    "/wp-json/wp/v2/pages?per_page=15",
                    {
                        headers: {
                            Authorization: "Basic " + base64.encode(username + ':' + password),
                            mode: 'no-cors',
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