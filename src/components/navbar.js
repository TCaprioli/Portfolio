import React from 'react';
import {NavLink} from 'react-router-dom';



function Navbar() {
  return (
    <div id="navbar">
        <NavLink
        to="/"
        exact>

        <img id="nav-portrait" src={require("../media/portrait.jpg")} alt="portrait"/>
        </NavLink>
      
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

        <div id='mobile-nav'>
        <h1>
        <NavLink
        to="/"
        exact
        style={{textDecoration: 'none', color: 'black'}}>Tyler Caprioli
        </NavLink>
        </h1>
        

        <span className="nav-option">
          <NavLink
          to='/about'
          style={{textDecoration: 'none', color: 'black'}}>
        <span >
          About Me
           </span>
          </NavLink>
        </span>

        <span className="nav-option">
        <NavLink
          to='/projects'
          style={{textDecoration: 'none', color: 'black'}}>
        <span >
          Projects
           </span>
          </NavLink>
        </span>

        <span className="nav-option">
        <NavLink
          to='/resume'
          style={{textDecoration: 'none', color: 'black'}}>
        <span >
          Resume
          </span>
          </NavLink> 
        </span>

        <span className="nav-option">
        <NavLink
          to='/contact'
          style={{textDecoration: 'none', color: 'black'}}>
        <span >
          Contact
          </span>
          </NavLink>
        </span>

    
        </div>

    </div>
  );
}

export default Navbar;
