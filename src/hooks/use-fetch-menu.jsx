import React, { useState, useEffect } from 'react';

import axios from 'axios';



function useFetchMenu() {
    const [ data, setData ] = useState([]);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const {data: response } = await axios.get("/wp-json/wp/v2/footer-links");
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

export default useFetchMenu;