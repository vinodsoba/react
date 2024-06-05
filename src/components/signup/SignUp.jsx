import React, { useState } from 'react'
import SignUpAPI from '../signupapi/SignUpApi';
import Layout from '../layout/Layout';


function SignUp(props){
    const [ APIDetailsSignUp, setAPIDetailsSignUp ] = useState({
        user: '',
        email: '',
        pass: '',
    })
    
    const [ signUpDetails, setSignUpDetails ] = useState({
        user: '',
        email: '',
        pass: '',
    })

    console.log(signUpDetails)

    
    function handleChange(e) {
        const { name, value } = e.target
        setSignUpDetails(prev => {
            return (
                {
                    ...prev, [name]: value
                }
            )
        })
    }

    function handleSubmit(){
        setAPIDetailsSignUp({ ...signUpDetails })
    }
   
    
    return (
        <Layout>
            <div className="login">
                <h2>Sign Up</h2>
                {props.serverMessage}
                <input 
                type="text" 
                placeholder='User Name' 
                name='user'
                value={signUpDetails.user}
                onChange={handleChange}
                />

<input 
                type="email" 
                placeholder='Email Address' 
                name='email'
                value={signUpDetails.email}
                onChange={handleChange}
                />

<input 
                type="password" 
                placeholder='Password' 
                name='pass'
                value={signUpDetails.pass}
                onChange={handleChange}
                />

<input 
                type="submit" 
                onClick={handleSubmit}
                />
            </div>
            <SignUpAPI 
            APIDetailsSignUp={APIDetailsSignUp}
            setServerMessage={props.setServerMessage}
            setUsername={props.setUsername}
            setIsLoggedIn={props.setIsLoggedIn}

            />
        </Layout>
    )
}

export default SignUp;