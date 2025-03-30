import React from 'react';
import '../components/ContactFormStyle.css';

const ContactForm = () => {

  return (
    <div className='form'>
        <form onSubmit>
        <label>Name</label>
        <input  name="name" type="text" required/>
        <label name="email">Email</label>
        <input type="email" required/>
        <label>Subject</label>
        <input name="subject" type="text" required/>
        <label>Messages</label>
        <textarea name="message" rows="6" placeholder='Type Your Message here...'/>
    <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm