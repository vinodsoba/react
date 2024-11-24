import React from 'react'
import useFetchHeaderMenu from '../../hooks/use-fetch-header-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function MainMenu({ setShowSideBar, showSideBar } ) {
   
    const { data } = useFetchHeaderMenu();

    const closeModal = () => {
        setShowSideBar(!showSideBar)
    };

    console.log(data);

    if(!data) return null;
    return (
        <div className='main-menu-side'>
            <div className="close-sidebar">
                <FontAwesomeIcon 
                onClick={closeModal} 
                style={{color: '#fff', fontSize: '20px', cursor: 'pointer'}} icon={faXmark} />
            </div>
            {
                data.map(item => 
                <li style={{ color: '#fff'}} key={item.id}><a href={item.url}>{item.title}</a></li>
                )
            }    
        </div>
    )
}

export default MainMenu