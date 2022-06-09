import './App.scss';
import LateralMenu from './components/LateralMenu/LateralMenu.jsx';
import Footer from './components/Footer/Footer.jsx';
import Portada from './components/Portada/Portada.jsx';
import DarkMode from './components/DarkMode/DarkMode.jsx';
import ContactForm from './components/ContactForm/ContactForm';
import { useState } from "react";
import { CV } from "./CV/curriculum.js";
import HeroCard from "./components/Hero/HeroCard";

const { aboutMe, education, experience, languages, habilities, volunteer } = CV;

//let contactForm = [];

function App() {
  const [dark, setDark] = useState(false);
  

  const getContact = (newContact) => {
    console.log('En APP newContact', newContact);
  }

  return (
    <div className={dark ? 'appDark' : 'appLight'}>
    <HeroCard aboutMe={aboutMe}/>
    <DarkMode dark={dark} setDark={setDark}/>
    <LateralMenu />
    <Portada />
    <Footer />
    <ContactForm getContact={getContact}/>
    </div>
  );
};

export default App;
