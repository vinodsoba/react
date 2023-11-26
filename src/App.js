import { useContext } from 'react';
import  { BrowserRouter,  Routes, useHistory, Route }  from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// stylesheet
import './App.css';
import { ThemeContext } from './Theme';
import Header from './components/header/Header';
import HomePage from './pages/Homepage';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import PortfolioDetail from './pages/PortfolioDetail';


function App() {
  const { theme } = useContext(ThemeContext)
  return (
        <div className={`App ${theme}`}>
          <Header />
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/work" element={<Work/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/portfoliodetail/:id" element={<PortfolioDetail />} />
            </Routes>
          <Footer />
        </div>
  );
}

export default App;
