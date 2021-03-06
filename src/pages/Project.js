import React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Sonata from '../media/Sonata.jpg'
import AppTrack from '../media/AppTrack.jpg'


export default()=>{
  return (
   <>
   <Layout>

    <h1>Projects</h1>

    <Project title='AppTrack' gitFront='https://github.com/TCaprioli/AppTrack-Frontend' gitBack='https://github.com/TCaprioli/AppTrack-Backend'
    demo='https://apptrack.netlify.app/'  img={AppTrack} imgAlt='AppTrack main page'
    description={<p>Apptrack is a job application tracker built with React, Redux, and Ruby on Rails. This application allows a user to upload PDF resumes, log job applications, and organize the applications with folders.<br/> <strong>Live demo only logs applications --  See video demo for full features.</strong></p>}/>

    <Project title='Sonata-React' gitFront='https://github.com/TCaprioli/Sonata-React-Frontend' gitBack='https://github.com/TCaprioli/Sonata/tree/master/Backend'
    demo='http://sonata-react.herokuapp.com' img={Sonata} imgAlt='sonata main page'
    description='Sonata is a single page music player application with preloaded songs made with React and Ruby on Rails. It allows a user to create playlists and perform "like" actions on songs.'/>

    </Layout>         
  </>
  );
}


