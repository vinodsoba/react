import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slice/authSlice'
import axios from 'axios'
import Layout from '../layout/Layout'

import './style.css'

const Login = () => {

    //const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const formik = useFormik({
        // Initial values
        initialValues: {
            email: '',
            password: '',
        },

        // Validation Schema
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Required').email('Invalid email'),
            password: Yup.string().required().min(4),
        }),

        // On Submit
        onSubmit: (data) => {
            const { email, password} = data;
            axios.post('http://localhost/vs/wp-json/jwt-auth/v1/token', {
                "username": email,
                "password" : password,
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
            
    console.log('formik.values', formik.values);
    console.log('formik.errors', formik.errors);

    return (
        <Layout>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 custom-form">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">                   
                        </div>
                        <div style={{marginTop: '113px'}} className="md:w-8/12 lg:w-5/12 lg:ml-20"> 
                        <p>Sign in to your account</p>  
                             <form onSubmit={formik.handleSubmit}> 
                             <div className="mb-6">
                                 <input
                                     type="email"
                                     className="email-input-field"
                                     placeholder="Email address"
                                     name="email"
                                     value={formik.values.email}
                                     onChange={formik.handleChange}
                                 /> 
                                 {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
                             </div>

                             <div className="mb-6">
                                 <input
                                     type="password"
                                     className="email-input-field"
                                     placeholder="Password"
                                     name="password"
                                     value={formik.values.password}
                                     onChange={formik.handleChange}
                                 />
                                 {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                             </div>

                             <button
                                 type="submit"
                                 className="cta"
                                 data-mdb-ripple="true"
                                 data-mdb-ripple-color="light"
                                 disabled={auth.isLoading}
                             >
                                 Sign in
                             </button>
                         </form>                
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login;