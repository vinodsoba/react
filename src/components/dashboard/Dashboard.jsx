import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import LayoutDashboard from '../layout/LayoutDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import DropdownMenu from '../dropdown/DropdownMenu';
import useFetchPosts from '../../hooks/use-fetch-posts';
import { Link, useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const [ user, setUser ] = useState(null);
    //const [openMenu, setOpenMenu ] = useState(false);
    const [ closeMenu, setCloseMenu ] = useState(false);

    const { data  } = useFetchPosts();

    const history = useNavigate();

    function handleclick(event) {
        const id = event.currentTarget.dataset.id;
        const url = history(`/dashboard/courses/${id}`);
        console.log('button works', url);
    }

    console.log(data);
    useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('user'));
        if(auth){
        setUser(auth);
        }  
    }, []);

    /*const openMenuModal = () => {
        console.log('menu is now open');
        setOpenMenu(true);
    }
    */
    if(user) {
        return(
            <LayoutDashboard>
                <div className='dashboard-header py-3'>
                    <Row>
                        <Col md={2}><div className='menu-toggle'>
                        <FontAwesomeIcon 
                        icon={faBars} 
                        style={{ color: '#fff', fontSize: '22px'}}
                        onClick={() => setCloseMenu(!closeMenu)}
                        
                        />
                        {closeMenu ? <DropdownMenu/> : null }
                        </div></Col>
                        <Col md={10}
                        style={{color: '#fff'}}
                        >Welcome {user.user_display_name}</Col>
                    </Row>
                </div>
                <Container>
                    <Row>
                    <Col md={12}>
                        <h2>Hi {user.user_display_name}</h2>   
                    </Col>
                    {
                       data.map( index  => index ?  (
                           
                                <Col md={3}>
                                <Card>
                                    <CardHeader>Create Game</CardHeader>
                                    <CardBody>
                                        <h4>Some text goes here</h4>
                                    </CardBody>
                                    <CardFooter>
                                        <p  className="cta" onClick={handleclick} data-id={index.id} key={index.id}>View Course</p></CardFooter>
                                </Card>
                                </Col>   
                            
                        ) : null )
                    } 
                    </Row>
                </Container>
            </LayoutDashboard>
        )   
    } else {
        return <>No User is Found</>
    }
}

export default DashBoard