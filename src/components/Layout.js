import React from 'react';
import Navbar from './navbar'
import { FaArrowAltCircleUp } from "react-icons/fa";
import arrow from './arrow';




export default(props)=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>

            {props.children}
          {/* <div className='content-con'>
          </div> */}
          <div id='up-con'>
            <FaArrowAltCircleUp id='up-arrow' onClick={()=>{arrow()}}/>
          </div>

        </div>
      </div>
    </div>
  );
}


