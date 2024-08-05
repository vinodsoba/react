import React from 'react'
import { Navigate } from 'react-router-dom';
import Setting from '../settings/Setting';

function PrivateSetting() {
    const user = localStorage.getItem('user');
     if(user){
        return <Setting />
    } else {
        return <Navigate to="/login" /> 
    }

}

export default PrivateSetting;