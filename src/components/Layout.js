import React from 'react';
import Navbar from './navbar'
import { FaLinkedin,FaGithub,FaMedium,FaArrowAltCircleUp } from "react-icons/fa";




export default(props)=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
          <div className='content-con'>
           {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}


