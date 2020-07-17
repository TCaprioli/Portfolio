import React from 'react';
import Navbar from './navbar'


export default()=>{
  return (
    <div className='background'>
      <div id='home-con'>
        <Navbar/>
        <div className='content'>
          <div className='content-con'>

           <h1>Projects</h1>

           <h2 className='project-title'>Sonata-React</h2>

           <h4>GitHub: <a href='https://github.com/TCaprioli/Sonata-React-Frontend' rel='noopener'>Front-end</a> /
           <a href='https://github.com/TCaprioli/Sonata/tree/master/Backend' rel='noopener'> Back-end</a></h4>
           <h4>Click here for <a href='http://sonata-react.herokuapp.com' rel='noopener'>Demo</a></h4>

           <img className='project-img' src={require('../media/Sonata.png')} alt='sonata main page'/> 

           <p className='text-box'>Sonata is a single page music player application with preloaded songs made with React and Ruby on Rails. It allows a user to create playlists and perform "like" actions on songs.</p>
           <br/>
           <hr/>

           <h2 className='project-title'>AppTrack</h2>

           <h4>GitHub: <a href='https://github.com/TCaprioli/AppTrack-Frontend' rel='noopener'>Front-end</a> /
           <a href='https://github.com/TCaprioli/AppTrack-Backend' rel='noopener'> Back-end</a></h4>
           <h4>Click here for <a href='https://www.loom.com/share/7b6662d06a724eaba0fce829ad8d60e1' rel='noopener'>Demo</a></h4>

           <img className='project-img' src={require('../media/AppTrack.png')} alt='AppTrack main page'/> 

           <p className='text-box'>Apptrack is a job application tracker built with React, Redux, and Ruby on Rails. This application allows a user to upload PDF resumes, log job applications, and organize the applications with folders.</p>
            <br/>
            <hr/>
           

            
          </div>

            
        </div>

      </div>
    </div>
  );
}


