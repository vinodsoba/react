import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard';
import DashboardCourses from '../../pages/DashboardCourses';


function PrivateRoutes(){
    const user = localStorage.getItem('user');
    
    if(user ){
      return <Dashboard />
    } else if (!user){
      return <Navigate to='/login'/>
    }
    else {
      return <DashboardCourses />
    }
  
}

export default PrivateRoutes