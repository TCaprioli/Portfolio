import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaLinkedin,FaGithub,FaMedium } from "react-icons/fa";



function Navbar() {
  return (
    <div id="navbar">
      
        <img id="nav-portrait" src={require("../media/portrait.jpg")} alt="portrait"/>
      
      <div id="navop-container">

        <div className="nav-option">
          <NavLink
          to='/about'
          style={{textDecoration: 'none', color: 'black'}}>
        <div >
          About Me
           </div>
          </NavLink>
        </div>

        <div className="nav-option">
        <NavLink
          to='/projects'
          style={{textDecoration: 'none', color: 'black'}}>
        <div >
          Projects
           </div>
          </NavLink>
        </div>

        <div className="nav-option">
        <NavLink
          to='/resume'
          style={{textDecoration: 'none', color: 'black'}}>
        <div >
          Resume
          </div>
          </NavLink> 
        </div>

        <div className="nav-option">
        <NavLink
          to='/contact'
          style={{textDecoration: 'none', color: 'black'}}>
        <div >
          Contact
          </div>
          </NavLink>
        </div>

    </div>

        {/* <div className="icon-container">
            <FaLinkedin id="icon1" className="icon"/>
            <FaGithub className="icon"/>
            <FaMedium className="icon"/>
        </div> */}

    </div>
  );
}

export default Navbar;
