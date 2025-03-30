import React, { useState } from 'react'
import "../components/NavbarStyle.css";
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import vishwajeet_resume from '../assets/pdf/Vishwajeet.pdf';


const Navbar = () => {
    const [tap, setTap] = useState(false);
    const handleTap=()=>setTap(!tap);
    const[color,setColor] = useState(false)
    const changeColor=()=>{
      if(window.scrollY >=100){
        setColor(true);
      }else
      setColor(false)
    };
      window.addEventListener("scroll",changeColor);
     

  return (
    <div className={color? "Navheader Navheader-bg": "Navheader"}>
       <Link to="/">
       <h1 style={{fontFamily:"Amita"}}>VISHWAJEET</h1>
       </Link>
       <ul className={tap ? "navbar-menu active":"navbar-menu"}>
        <li>
            <Link to="/">Home</Link>
         </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li> 
        <li>
            <Link to="/contact">Contactus</Link>
        </li> 
        <li>
            {/* <Link to={vishwajeet_resume} target="_blank">Download Cv
           </Link> */}
            <a download='Vishwajeet_resume'  href={vishwajeet_resume}><h4>Download Cv</h4></a> 
        </li>
       </ul>
       <div className='hamburger' onClick={handleTap}>
        {tap ?(<FaTimes size={20} style={{color:"#fff"}}/>)
        :(<FaBars size={20} style={{color:"#fff"}}/>)}
       </div>
    </div>
  )
}

export default Navbar;