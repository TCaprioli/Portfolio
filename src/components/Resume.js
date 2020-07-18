import React from 'react';
import Navbar from './navbar';
import arrow from './arrow';
import { FaArrowAltCircleUp } from "react-icons/fa";



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

          <div className='up-con'>
          <FaArrowAltCircleUp className='up-arrow' onClick={()=>{arrow()}}/>
          </div>
        </div>

      </div>
    </div>
  );
}


