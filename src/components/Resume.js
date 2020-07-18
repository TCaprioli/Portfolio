import React from 'react';
import Navbar from './navbar';
import arrow from './arrow';
import { FaArrowAltCircleUp } from "react-icons/fa";
import ResumePDF from '../media/Resume.pdf'
import Layout from './Layout';



export default()=>{
  return (
    <>
    <Layout>
      <object id='resume' data={ResumePDF} type='application/pdf' title='My resume' ></object> <br/>

      <a href={ResumePDF} download="Tyler Caprioli - Resume">Download as a PDF</a>
    </Layout>
    </>
  );
}


