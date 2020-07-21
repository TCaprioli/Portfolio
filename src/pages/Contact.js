import React from 'react';
import { FaLinkedin,FaGithub,FaMedium } from "react-icons/fa";
import Layout from '../components/Layout';


export default()=>{
  return (
<>
  <Layout>

  <h1>Contact Me</h1>


  <h2>Email me:</h2>
    <h3><a href='mailto: capriolityler@gmail.com'>Capriolityler@gmail.com</a></h3>
    <span id='e-caption'>(link opens email app)</span>

  <div>or</div>
    <h3>Get in touch with me on: </h3>
    
    <div className="icon-container">
    <a className='icon-link' href='https://www.linkedin.com/in/tylercaprioli/' rel='noopener'><FaLinkedin className="icon"/></a>
    <a className='icon-link' href='https://github.com/TCaprioli' rel='noopener'><FaGithub className="icon"/></a>
    <a className='icon-link' href='https://medium.com/@caprioli.tyler' rel='noopener'><FaMedium className="icon"/></a>
  </div>





  </Layout>
</>
  );
}


