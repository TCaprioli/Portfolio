import React from 'react';
import Navbar from './navbar'
import { FaLinkedin,FaGithub,FaMedium } from "react-icons/fa";



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
            <a className='icon-link' href='https://www.linkedin.com/in/tylercaprioli/' target='_blank'><FaLinkedin className="icon"/></a>
            <a className='icon-link' href='https://github.com/TCaprioli' target='_blank'><FaGithub className="icon"/></a>
            <a className='icon-link' href='https://medium.com/@caprioli.tyler' target='_blank'><FaMedium className="icon"/></a>
        </div>
          </div>
           

            
          </div>

            
        </div>

      </div>
    </div>
  );
}


