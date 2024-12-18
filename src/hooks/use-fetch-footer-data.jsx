import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchFooterLinks() {
    const [ data, setData ] = useState([]);
    const [loading, setLoading ] = useState(true);

    let base64 = require("base-64"); // install it before use from npm i base-64

    const username = `${process.env.REACT_APP_API_USERNAME_NEW_SITE}`;
    const password = `${process.env.REACT_APP_API_PASSWORD_NEW_SITE}`;

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const {data: response } = await axios.get(
                    "/wp-json/wp/v2/footer-links",
                    
                {
                    headers: {
                        Authorization: "Basic " + base64.encode(username + ":" + password),
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

export default useFetchFooterLinks;