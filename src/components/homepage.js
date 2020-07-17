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
            <p> placeholder text
            </p>

            
        </div>

      </div>
    </div>
  );
}

export default Homepage;
