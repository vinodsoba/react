import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navigation from '../navigation/Navigation'
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../footer/Footer';

function Layout({ children }) {
    
const authUser = useSelector((state) => state.auth.user);

  return (
    <div>
        <Header authUser={authUser}/>
            {children}
        <Footer />
    </div>
  )
}

export default Layout