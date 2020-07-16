import React, {useState} from 'react';
import Homepage from './components/homepage'
import {IoIosArrowDropdown} from 'react-icons/io'
import './App.css';


export default()=>{
  const [selected,useSelected] = useState(false)
  return (
    <div id="landing">
      <div id="portrait"></div>
      <div id="intro-text">
        <h1 className="text">Tyler Caprioli</h1>
        <h2 className="text">Software Engineer / Full Stack Web Developer</h2>
        {selected? 
        
        <span onMouseLeave={()=>{useSelected(false)}}>
          <IoIosArrowDropdown id='arrow' style={{color: "gray"}}/>
        </span>
        
        :

        <span onMouseEnter={()=>{useSelected(true)}}>
          <IoIosArrowDropdown id='arrow' style={{color: "white"}}/>
        </span>
        

        
        }
      </div>
    </div>
  );
}



