import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchMenu() {
    const [ data, setData ] = useState([]);
    const [loading, setLoading ] = useState(true);

    let base64 = require("base-64"); // install it before use from npm i base-64

    const username = 'admin';
    const password = 'TdwV yZH8 TfyE 4O53 N4Cg 9td2';

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const { data: response } = await axios.get(
                    "/wp-json/wp/v2/footer-links",
                    {
                        headers: {
                            Authorization: "Basic " + base64.encode(username + ":" + password),
                            'Access-Control-Allow-Credentials': true,
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods' : 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                            'Access-Control-Allow-Headers':
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'

                    },
                    body: JSON.stringify(data)
                        
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

export default useFetchMenu;