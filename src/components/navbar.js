import React from 'react';
import NavOptions from './navoptions'
import { FaLinkedin,FaGithub,FaMedium } from "react-icons/fa";



function Navbar() {
  return (
    <div className="navbar">
        {/* <img id="portrait" src={require("../portrait.jpg")} alt="portrait"/> */}
        <hr/>
        {/* <NavOptions/> */}

        <div className="icon-container">
            <FaLinkedin id="icon1" className="icon"/>
            <FaGithub className="icon"/>
            <FaMedium className="icon"/>
        </div>

    </div>
  );
}

export default Navbar;
