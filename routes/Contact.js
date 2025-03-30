import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LinkImg from '../components/LinkImg';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <div>
          <Navbar/>
          <LinkImg heading="CONTACT" text="Lets have a chat."/>
          <ContactForm/>
          <Footer/>
    </div>
  )
}

export default Contact;