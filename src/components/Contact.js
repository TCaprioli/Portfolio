import React from 'react';
import Navbar from './navbar'
import arrow from './arrow'
import { FaLinkedin,FaGithub,FaMedium,FaArrowAltCircleUp } from "react-icons/fa";




export default()=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
          <div className='content-con'>

           <h1>Contact Me</h1>
          <div id='contact-con'>

          <h2>Email me: Capriolityler@gmail.com</h2>
          <div>or</div>
           <h3>Get in touch with me on: </h3>
            <div className="icon-container">
            <a className='icon-link' href='https://www.linkedin.com/in/tylercaprioli/' rel='noopener'><FaLinkedin className="icon"/></a>
            <a className='icon-link' href='https://github.com/TCaprioli' rel='noopener'><FaGithub className="icon"/></a>
            <a className='icon-link' href='https://medium.com/@caprioli.tyler' rel='noopener'><FaMedium className="icon"/></a>
          </div>



          </div>
          </div>
        </div>
      </div>
    </div>
  );
}


