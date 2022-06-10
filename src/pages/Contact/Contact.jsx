import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.scss'

const Contact = () => {
    const getContact = (newContact) => {
        console.log('En APP newContact', newContact);
      }
  return (
    <div>
    <ContactForm getContact={getContact}/>    
    </div>
  )
}

export default Contact

