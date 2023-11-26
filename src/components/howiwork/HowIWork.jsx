import React from 'react';

import useFetchData from '../../hooks/use-fetch-data';

import './style.css';

function HowIWork() {

  const { data } = useFetchData([]);

  console.log(data);
  return (
    <>
       <div className='how-i-work'>
      {
        data.map(item => item.id === 530 ? (
          <div className='how-i-work-container'>
             <div className="header-title" dangerouslySetInnerHTML={{__html: item.acf.header_title } } />
              <h2><div className='sub-header-title' dangerouslySetInnerHTML={{__html: item.acf.sub_header_title}} /></h2>

          </div>
                 )
        : null
        )
      }
    </div>
    
    </>
   
  )
}

export default HowIWork