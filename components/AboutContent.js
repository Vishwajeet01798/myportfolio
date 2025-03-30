import React from 'react'
import '../components/AboutContentStyle.css';
import About1 from '../assets/about5.jpg';
import About2 from '../assets/about4.jpg';
import { Link } from 'react-router-dom';
const AboutContent = () => {
  return (
    <div className='about'>
     <div className='left'>
     <h1>Who am I?</h1>
     <p> I am a Mern Stack developer. I create full Stack responsive secure websites for my clients.</p>
     <Link to= "/contact">
     <button className='btn'>Contact</button></Link>
     </div>

     <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={About1} className='img'
                 alt="true"/>
                </div>
            <div className='img-stack bottom'>
                <img src={About2} className='img' 
                alt="true"/>
            </div>
            </div>
     </div>
    </div>
  )
}

export default AboutContent