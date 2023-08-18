import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/Homepage';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
    </div>
    
  );
}

export default App;
