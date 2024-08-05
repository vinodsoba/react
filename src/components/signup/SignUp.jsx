import React, { useState } from 'react'
import SignUpAPI from '../signupapi/SignUpApi';
import Layout from '../layout/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

    const formik = useFormik({
        initialValues: {
            user: '',
            email: '',
            pass: '',
        }, 

        validationSchema: Yup.object().shape({
            user: Yup.string()
            .required('Required'),
            email: Yup.string()
            .required('Email is required')
            .email("Email is invalid"),
            pass: Yup.string().min(4),
    
        }),

         // On Submit
         onSubmit: (data) => {
            const { user, email, pass} = data;
            axios.post('http://localhost/vs/wp-json/jwt-auth/v1/token', {
                "username" : user,
                "email": email,
                "password" : pass,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log('response', res);
                if(res.status === 200 && res.statusText === "OK"){
                    localStorage.setItem('user', JSON.stringify(res.data));
                    window.location='http://localhost:3000/dashboard';
                }
            })
            .catch((error) => { 
                console.log('errors', error);
            })
        }
    });

    console.log(signUpDetails);
    
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
   
    console.log('formik.values', formik.values);
    console.log('formik.errors', formik.errors);
    
    return (
        <Layout>
            <div className="login">
                <h2>Sign Up</h2>
                {props.serverMessage}
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                
                <input 
                type="text" 
                placeholder='User Name' 
                name='user'
                className='email-input-field'
                value={signUpDetails.user}
                onChange={handleChange}
                /></div>
                { formik.errors.user ? <div className='text-danger'>{formik.errors.user }</div> : null  }
                <div className="mb-6">
                

<input 
                type="email" 
                placeholder='Email Address' 
                className='email-input-field'
                name='email'
                value={signUpDetails.email}
                onChange={handleChange}
                />
                </div>
                {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null }
                <div className="mb-6">
<input 
                type="password" 
                placeholder='Password' 
                name='pass'
                className='email-input-field'
                value={signUpDetails.pass}
                onChange={handleChange}
                />
                </div>
                {formik.errors.pass ? <div className='text-danger'>{formik.errors.pass}</div> : null }
                <button
                    type="submit"
                    className="cta"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleSubmit}
                             >
                Sign Up
                </button>

                </form>
               
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