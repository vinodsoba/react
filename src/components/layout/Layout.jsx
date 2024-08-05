import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../header/Header'
import Footer from '../footer/Footer';

function Layout({ children}) {
    
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