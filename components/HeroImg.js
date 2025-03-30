import React from 'react'
import "../components/HeroImgStyles.css";
import nav1 from '../assets/Nav1.jpg';


import { Link } from 'react-router-dom';

const HeroImg = () => {
  return(
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={nav1} alt='HeroImg'></img>
        </div>
        <div className='content'>
            <p>Hi, I' am A Web Developer</p>
            <h1>Mern Stack Developer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>

    </div>
  )
}


export default HeroImg;