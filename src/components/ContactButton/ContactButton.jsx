
//import { useState } from 'react';
//import ContactForm from '../ContactForm/ContactForm.jsx';
import './ContactButton.scss';


const ContactButton = ({dark, setDark}) => {
  
    console.log('Dark mode', dark);
  return (
    <div className="contactButton">
        <button className="buttonContact" type="button">Contacta conmigo</button>
    </div>   
  )
}


export default ContactButton