import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import './style.css'

const NotFound = () => {
    return (  
        <Layout>
            <div className="not-found">
                <h2>Not Found</h2>
                <p>Ooops..this is embarassing. Page not found <Link to="/">homepage</Link></p>
            </div>
        </Layout>
    );
}
 
export default NotFound;