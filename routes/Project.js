import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LinkImg from '../components/LinkImg';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
        <Navbar/>
        <LinkImg heading="PROJECTS."
         text="Some of my most recent works"/>
         <Work/>
        <Footer/>
    </div>
  )
}

export default Project;