import "./App.scss";
import Footer from "./components/Footer/Footer.jsx";
import DarkMode from "./components/DarkMode/DarkMode.jsx";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";
//import Navbar from "./components/Navbar/Navbar.jsx";
import ContactButton from "./components/ContactButton/ContactButton";
import SpotifyWidget from "./components/SpotifyPlayer/SpotifyPlayer";
import SocialMedia from "./components/SocialMedia/SocialMedia";

import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";

import Aboutme from "./pages/Aboutme/Aboutme";
import Projects from "./pages/Projects/Projects";
//import Contact from "./pages/Contact/Contact.jsx";

import Sidebar from "./components/Sidebar/Sidebar.jsx";

import LikeView from './components/LikesCounter/LikeView';
import LikeButton from './components/LikesCounter/LikeButton';
import TypingText from "./components/TypingText/TypingText";




//import { CV } from "./CV/curriculum.js";
//import HeroCard from "./components/Hero/HeroCard";

//const { aboutMe, education, experience, languages, habilities, volunteer } = CV;

//let contactForm = [];

function App() {
  const [dark, setDark] = useState(false);
  const { pathname } = useLocation();
  console.log (pathname)
  const bg = pathname !== "/" ? 'nobg' : '';

  const getContact = (newContact) => {
    console.log("En APP newContact", newContact);
  };

  return (
    
      <div className={dark ? `${bg} appDark` : `${bg} appLight` }>
        <Sidebar />
        {/*<Navbar />*/}
        {/*<HeroCard aboutMe={aboutMe} habilities={habilities}/>*/}
        <DarkMode dark={dark} setDark={setDark} />
        <ContactButton />
        <h1 className="title">Hi! I'm Victor León</h1>
        <TypingText/>
        <Footer />
        <SpotifyWidget />
        <SocialMedia />
        
        <LikeView/>
        <LikeButton/>
        
        <Routes>
          <Route path="/"/>
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactForm getContact={getContact}/>} />
        </Routes>
      </div>
  );
}

export default App;
