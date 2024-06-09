import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchMenu() {
    const [ data, setData ] = useState([]);
    const [loading, setLoading ] = useState(true);

    let base64 = require("base-64"); // install it before use from npm i base-64

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const {data: response } = await axios.get(
                    "http://localhost/vs/wp-json/wp/v2/footer-links",
                    {
                        headers: {
                            Authorization: "Basic " + base64.encode(username + ":" + password),
                            mode: 'cors',
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin':'*',
                            'Access-Control-Allow-Methods' : "POST, GET, OPTIONS, DELETE, PUT",
                            'Access-Control-Allow-Headers' : "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"
                    },
                        body: JSON.stringify(data)
                    })
                    
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