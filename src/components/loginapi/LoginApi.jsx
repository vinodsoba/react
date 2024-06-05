import React, { useEffect, useState } from "react";

function LoginAPI(props) {
    const [urlToLogin, setUrlToLogin] = useState('')
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (props.APIDetailsLogin.user.length > 0) {
                    let formData = new FormData()
                    formData.append('username', props.APIDetailsLogin.user)
                    formData.append('password', props.APIDetailsLogin.pass)
                    const url = `http://localhost/vs/?rest_route=/simple-jwt-login/v1/auth`
                    const response = await fetch(url, {
                        method: 'POST',
                        body: formData
                    })
                        .then(response => response.json())
                        .then((data) => {
                            if (data['success'] == true) {
                                console.log(data)
                                localStorage.setItem('jwt', data['data']['jwt'])
                                setUrlToLogin(`/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['data']['jwt']}`)
                            }
                            else {
                                console.log(data)
                                .setServerMessage(data['data']['message'])
                            }
                        })
                }
                
            } catch (error) {
                setError(error.message)
            }

        }
        
        fetchData();
    }, [props.APIDetailsLogin])

    useEffect(() => {
        if (urlToLogin.length > 0) {
            fetch(urlToLogin, {
                method: 'GET'
            })
                .then((response) => {
                    if (response.status == '200') {
                        props.setIsLoggedIn(true)
                        props.setUsername(props.APIDetailsLogin.user)
                        window.location.replace('http://localhost/vs/portfolio/')
                    }
                    else {
                        console.log('error')
                    }
                })
        }
    }, [urlToLogin])

    return (
        <>
        </>
    )

}

export default LoginAPI