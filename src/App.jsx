import './App.scss';
import Footer from './components/Footer/Footer.jsx';
import Portada from './components/Portada/Portada.jsx';
import DarkMode from './components/DarkMode/DarkMode.jsx';
import ContactForm from './components/ContactForm/ContactForm';
import { useState } from "react";
import Navbar from './components/Navbar/Navbar.jsx';

import {Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';

import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


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
    <Router>
    <Navbar/>

    <div className={dark ? 'appDark' : 'appLight'}>

      <Routes>
        <Route path='/' element={<Portada />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

    <DarkMode dark={dark} setDark={setDark}/>
    <Portada />
    <Footer />
    <ContactForm getContact={getContact}/>
    </div>
    </Router>


  );
};

export default App;
