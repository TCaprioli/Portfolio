import React from 'react';
import Navbar from './navbar'
import { FaLinkedin,FaGithub,FaMedium,FaArrowAltCircleUp } from "react-icons/fa";
import Layout from './Layout';




export default()=>{
  return (
<>
  <Layout>
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
  </Layout>
</>
  );
}


