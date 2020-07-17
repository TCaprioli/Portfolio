import React, {useState} from 'react';
import Homepage from './components/homepage'
import {IoIosArrowDropdown} from 'react-icons/io'
import {NavLink} from 'react-router-dom';
import './App.css';


export default()=>{
  const [selected,useSelected] = useState(false)
  return (
    <div className="background">
      <div id="portrait"></div>
      <div id="intro-text">
        <h1 className="text">Tyler Caprioli</h1>
        <h2 className="text">Software Engineer / Full Stack Web Developer</h2>
        
        {selected? 
        
        <span id='arrow-con' onMouseLeave={()=>{useSelected(false)}}>
          <NavLink
          to='/about'
          >
            <IoIosArrowDropdown id='arrow' style={{color: "gray"}}/>
          </NavLink>
        </span >
        :
        <span id='arrow-con' onMouseEnter={()=>{useSelected(true)}}>
          <IoIosArrowDropdown id='arrow'/>
        </span >
        
        }
        </div>
    </div>
  );
}



