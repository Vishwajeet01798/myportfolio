import React from 'react';
import '../components/FooterStyles.css';
import { FaFacebook,FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}></FaHome>
                    <div>
                        <p>13,Firoz Gandhi Colony</p>
                        <p>Aliganj,Lucknow</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}></FaPhone>7007928724</h4>
                </div>
               
                   <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}></FaMailBulk>vishwajeet01798@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me...</h4>
                <p>This is me Vishwajeet Verma. I am a Web <span style={{color:" rgb(44, 211, 240)"}}>Developer</span>, I enjoy discussing new projects and design challanges.</p>
                <div className='social'>
              <Link to="https://www.facebook.com/" ><h4><FaFacebook size={30}  style={{color:"#fff",marginRight:"1rem"}}></FaFacebook></h4></Link>
               <Link to="https://www.linkedin.com/in/vishwajeet-verma-52622b203/"><h4><FaLinkedin size={30}  style={{color:"#fff",marginRight:"1rem"}}></FaLinkedin></h4></Link> 
                <Link to="https://www.youtube.com/"> <h4><FaYoutube size={30}   style={{color:"#fff",marginRight:"1rem"}}></FaYoutube></h4></Link>
                <Link to="https://github.com/Vishwajeet01798"><h4><FaGithub size={30}   style={{color:"#fff",marginRight:"1rem"}}></FaGithub></h4></Link> 
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;