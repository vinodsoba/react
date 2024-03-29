import React, { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchData() {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    let base64 = require('base-64');

    const username = 'admin';
    const password = 'TdwV yZH8 TfyE 4O53 N4Cg 9td2';

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const {data: response } = await axios.get(
                    "/wp-json/wp/v2/portfolio",
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