import React from 'react';
import army from '../media/army.png'
import Layout from './Layout';


export default()=>{
  return (  
<>
<Layout>
  <img id='bout-pic' src={army} alt='army portrait'/>
  <h1>About me <span role='img' aria-label='flex bicep'>💪🏽</span></h1>

  <p className='text-box'> 
  I am a passionate software developer who strives for efficiency and innovation while delivering modular, maintainable code. I am a proud graduate of Flatiron School’s Software Engineering immersive program (2020). It was here that I learned React, Javascript, Redux, Ruby, and Ruby-on-Rails.
    I absolutely love problem-solving and never shy-away from tackling challenging projects with a team. </p>

  <br/>

  <p className='text-box'> Prior to beginning my journey in Tech, I served in the United States Army Reserves as a Combat Engineer. Being a soldier has taught me the importance of leadership, discipline, and teamwork.</p>

  <br/>

  <p className='text-box'> I have always felt drawn to opportunities that allow me to contribute to something bigger than myself, which explains the seemingly unorthodox road from Combat Engineer to Software Engineer.
    In my own way, I want to change the world, and I plan on using technology to do that.</p>

  <br/>


  <p className='text-box'> When I’m not coding, you can find me re-watching <i>Avatar: The Last Airbender</i> or <i>Princess Mononoke</i> for the 10,000th time. I’m also interested in martial arts, and have trained in in Capoeira, Jiu-Jitsu, BJJ, and Modern Army Combatives Program (MACP). I love spending time with my beautiful wife and my two cats Sergey and Louis.</p>

    <br/>
    <hr/>

    <h2>Technical Skills</h2>
    <div id='skills-con'>
      <div id='lang'>
        <h3 className='project-title'>Languages</h3>
        <p>Javascript</p>
        <p>Ruby</p>
      </div>

      <div id='frame'>
        <h3 className='project-title'>Frameworks</h3>
        <p>React</p>
        <p>Redux</p>
        <p>Ruby on Rails</p>

      </div>

      <div id='db'>
        <h3 className='project-title'>Databases</h3>
        <p>SQL</p>
        <p>Postgres</p>

      </div>
    </div>
    </Layout>
</>
  );
}


