import React, { useState, useEffect } from 'react'

function SignUpAPI(props){
    const [ urlToSignIn, setUrlToSignIn ] = useState('')

    useEffect(() => {
        if(props.APIDetailsSignUp.user.length>0){

        let formData = new FormData()
        formData.append('user', props.APIDetailsSignUp.user)
        formData.append('email', props.APIDetailsSignUp.email)
        formData.append('pass', props.APIDetailsSignUp.pass)


            const url = 'http://localhost/vs/reg.php'
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then((response) => response.json())
            .then((data)=>{
                if(data['success']==true){
                    localStorage.setItem('jwt', data['data']['jwt'])
                setUrlToSignIn(`/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['data']['jwt']}`)
                console.log(data);
                } else {
                    console.log(data)
                    props.setServerMessage(data['data']['message'])
                }
            }) 
            
        } 

    }, [props.APIDetailsSignUp])

    useEffect(() => {
        if(urlToSignIn.length>0){
            fetch(urlToSignIn, {
                method: 'GET'
            })
            .then((response) => {
                if(response.status == '200'){
                    props.setIsLoggedIn(true)
                    props.setUsername(props.APIDetailsSignUp.user)
                    window.location.replace('http://localhost:3000')
                }
                else {
                    console.log("there is an error")
                }
            })
        }

    },[urlToSignIn])
}

export default SignUpAPI