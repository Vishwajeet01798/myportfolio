import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LinkImg from '../components/LinkImg';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
          <Navbar/>
          <LinkImg heading="About" text="I am friendly Front-End Developer."/>
          <AboutContent/>
          <Footer/>
    </div>
  )
}

export default About