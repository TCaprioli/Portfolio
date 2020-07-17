import React from 'react';
import Navbar from './navbar'


export default()=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
          <div className='content-con'>

           <iframe id='resume' src={require('../media/Resume.pdf')} title='My resume'>

           </iframe>
           

            
          </div>

            
        </div>

      </div>
    </div>
  );
}


