import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardCourses from '../../pages/DashboardCourses';


function PrivateComponent(){
    const user = localStorage.getItem('user');
    
    if(user ){
      return <DashboardCourses />
    } else if (!user){
      return <Navigate to='/login'/>
    }
    else {
      return <DashboardCourses />
    }
  
}

export default PrivateComponent