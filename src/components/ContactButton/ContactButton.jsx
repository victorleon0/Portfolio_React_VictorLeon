
//import { useState } from 'react';
//import ContactForm from '../ContactForm/ContactForm.jsx';
import './ContactButton.scss';


const ContactButton = ({dark, setDark}) => {
  
    console.log('Dark mode', dark);
  return (
    <div className="contactButton">
        <a href="contact">
        <button className="buttonContact" type="button">Contacta conmigo</button>
        </a>
    </div>   
  )
}


export default ContactButton