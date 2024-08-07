import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchHeaderMenu() {
    const [ data, setData ] = useState([]);
    const [loading, setLoading ] = useState(true);

    let base64 = require("base-64"); // install it before use from npm i base-64

    const username = `${process.env.REACT_APP_API_USERNAME}`;
    const password = `${process.env.REACT_APP_API_PASSWORD}`;

    useEffect(() => {        
        const fetchData = async () =>  {
            try {
                const {data: response } = await axios.get(
                    "/wp-json/wp/v2/header-main-menu",
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

export default useFetchHeaderMenu;