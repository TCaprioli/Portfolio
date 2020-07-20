import React from 'react';
import {IoIosArrowDropdown} from 'react-icons/io'
import {NavLink} from 'react-router-dom';
import '../App.css';


export default()=>{
  return (
    <div className="background landing">
      <div id='intro-con'>

      <div id="portrait"></div>
      <div id="intro-text">
        <h1 className="text">Tyler Caprioli</h1>
        <h2 className="text">Software Engineer / Full Stack Web Developer</h2>
        
       
        
        <span id='arrow-con'>
          <NavLink
          to='/about'
          >
            <IoIosArrowDropdown id='arrow' />
          </NavLink>
        </span >
       
        </div>
      </div>
    </div>
  );
}



