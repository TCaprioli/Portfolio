import React from 'react';
import Navbar from './navbar';
import arrow from './arrow';
import { FaArrowAltCircleUp } from "react-icons/fa";
import ResumePDF from '../media/Resume.pdf'



export default()=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
          <div className='content-con'>

           <object id='resume' data={ResumePDF} type='application/pdf' title='My resume' ></object>
           
           <br/>
           <a href={ResumePDF} download="Tyler Caprioli - Resume">Download as a PDF</a>
        
            
          </div>

          <div className='up-con'>
          <FaArrowAltCircleUp className='up-arrow' onClick={()=>{arrow()}}/>
          </div>
        </div>

      </div>
    </div>
  );
}


