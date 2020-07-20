import React from 'react';
import ResumePDF from '../media/Resume.pdf';
import Layout from '../components/Layout';



export default()=>{
  return (
    <>
    <Layout>
        <h1>Resume</h1>


        <object id='resume' data={ResumePDF} type='application/pdf' title='My resume' ></object> <br/>

        <a href={ResumePDF} download="Tyler Caprioli - Resume">Download as a PDF</a>


      </Layout>
    </>
  );
}


