import React from 'react'
import LayoutDashboard from '../components/layout/LayoutDashboard';
import CourseBuildGame from '../components/courses/CourseBuildGame';

function DashboardCourses() {
  return (
    <LayoutDashboard>
      <CourseBuildGame />
    </LayoutDashboard>  
  )
}

export default DashboardCourses;