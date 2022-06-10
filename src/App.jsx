import './App.scss';
import Footer from './components/Footer/Footer.jsx';
import Portada from './components/Portada/Portada.jsx';
import DarkMode from './components/DarkMode/DarkMode.jsx';
import ContactForm from './components/ContactForm/ContactForm';
import { useState } from "react";
import Navbar from './components/Navbar/Navbar.jsx';
//import {NavLink} from 'react-router-dom';

//import { CV } from "./CV/curriculum.js";
//import HeroCard from "./components/Hero/HeroCard";
//<HeroCard aboutMe={aboutMe}/>
//const { aboutMe, education, experience, languages, habilities, volunteer } = CV;

//let contactForm = [];

function App() {
  const [dark, setDark] = useState(false);
  

  const getContact = (newContact) => {
    console.log('En APP newContact', newContact);
  }

  return (

    <div className={dark ? 'appDark' : 'appLight'}>

    <DarkMode dark={dark} setDark={setDark}/>

    <Portada />
    <Footer />
    <Navbar />
    <ContactForm getContact={getContact}/>
    </div>
  );
};

export default App;
