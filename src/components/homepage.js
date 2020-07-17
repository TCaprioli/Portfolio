import React from 'react';
import Navbar from './navbar'


function Homepage() {
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
            <h1>About Me</h1>
            <img id='bout-pic' src={require('../media/army.png')}/>
            <p >whaddup i'm watching hot ones and I still kinda want to kill myself but not really. honestly I just really want to
              watch some porn rn
            </p>

            
        </div>

      </div>
    </div>
  );
}

export default Homepage;
