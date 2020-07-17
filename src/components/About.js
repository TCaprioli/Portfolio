import React from 'react';
import Navbar from './navbar'


export default()=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
          <div className='content-con'>

            <img id='bout-pic' src={require('../media/army.png')}/>
            <h1>About me 💪🏽</h1>
            
              <p className='text-box'> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
           

            
          </div>

            
        </div>

      </div>
    </div>
  );
}


