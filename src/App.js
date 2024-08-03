import React, { useState, useContext } from 'react';
import  {  Routes,  Route }  from 'react-router-dom';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// stylesheet
import './App.css';
import { ThemeContext } from './Theme';
import HomePage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import PortfolioDetail from './pages/PortfolioDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Test from './pages/Test';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';

import Dashboard from './components/dashboard/Dashboard';
import PrivateRoutes from './components/privateroutes/PrivateRoutes';
import Subscription from './components/subscribe/Subscription';
import NotFound from './components/notfound/NotFound';
import DashboardCourses from './pages/DashboardCourses';
import PrivateComponent from './components/privatecomponent/PrivateComponent';
import Setting from './components/settings/Setting';
import PrivateSetting from './components/privatesetting/PrivateSetting';
import SideMenu from './components/sidemenu/SideMenu';
import TopNavigation from './components/topnavigation/TopNavigation';



function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false)

  //c

  const { theme } = useContext(ThemeContext)
  return (
        <div className={`App ${theme}`}>
          
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/servicedetail/:id" element={<ServiceDetail />} />
              <Route path="/work" element={<Work/>} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" setIsLoggedIn={setIsLoggedIn} element={<SignUp />} />
      
                <Route path="/login" element={<Login />} />
     
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/portfoliodetail/:id" element={<PortfolioDetail />} />
              <Route path="/test" element={<Test />} />
              
              <Route element={<PrivateComponent />}>
                <Route path="/dashboard/courses/:id" element={<DashboardCourses />} />                
              </Route>

              <Route element={<PrivateSetting/>}>
                <Route path="/dashboard/settings" element={<Setting />} />
              </Route>
                
              <Route element={<PrivateRoutes/>}>
                  <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/subscription" element={<Subscription />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
        </div>
  );
}

export default App;
