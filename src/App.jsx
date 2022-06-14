import "./App.scss";
import Footer from "./components/Footer/Footer.jsx";
import Portada from "./components/Portada/Portada.jsx";
import DarkMode from "./components/DarkMode/DarkMode.jsx";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import ContactButton from "./components/ContactButton/ContactButton";
import SpotifyWidget from "./components/SpotifyPlayer/SpotifyPlayer";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
//import Contact from "./pages/Contact/Contact.jsx";


import { CV } from "./CV/curriculum.js";
import HeroCard from "./components/Hero/HeroCard";

//const { aboutMe, education, experience, languages, habilities, volunteer } = CV;

//let contactForm = [];

function App() {
  const [dark, setDark] = useState(false);

  const getContact = (newContact) => {
    console.log("En APP newContact", newContact);
  };

  return (
    
      <div className={dark ? "appDark" : "appLight"}>
        <Navbar />
        {/*<HeroCard aboutMe={aboutMe} habilities={habilities}/>*/}
        <Portada />
        <DarkMode dark={dark} setDark={setDark} />
        <ContactButton />
       
        <Footer />
        <SpotifyWidget />

        <Routes>
          <Route path="/"/>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactForm getContact={getContact}/>} />
        </Routes>
      </div>
  );
}

export default App;
