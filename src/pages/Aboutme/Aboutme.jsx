import "./Aboutme.scss";
import React from "react";
import SkillBar from 'react-skillbars';
import Sidebar from "../../components/Sidebar/Sidebar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import CV from '../../CV/curriculum';

const { aboutMe, habilities, education } = CV;




const skills = [
  {type: "HTML", level: 95},
  {type: "CSS", level: 90},
  {type: "React", level: 80},
  {type: "Javascript", level: 77},
  {type: "Angular", level: 30},
  {type: "NODE JS", level: 80},
  {type: "SQL", level: 59},
  {type: "MongoDB", level: 70},
];



//import { aboutMe, habilities } from "../../CV/curriculum.jsx";

const Aboutme = () => {
  

  return (
    <main className="aboutme">
    <Sidebar />

      <div className="containerHero">
      <div className="hero">
            <img src={aboutMe.image} alt="" />
            <div className="card">
              <h2>
                {aboutMe.name} {aboutMe.adress}
              </h2>
              <p>🗺️{aboutMe.city} </p>
              <p>🗓️{aboutMe.birthDate}</p>
              <p>
                📧
                <a href={"mailto:" + aboutMe.email}>
                  victor.leon.huerta@gmail.com
                </a>
              </p>
              <p>📱 {aboutMe.phone}</p>
              <p>
                💾<a href={aboutMe.gitHub}>GitHub</a>
              </p>
            </div>

            
      </div>
      </div>
      <div className="containerHabilities">
      
              <h2>Habilidades</h2>
              <SkillBar skills={skills}/>

              <p>{habilities} </p>
              
            
        
      </div>
      <p className="icon">👨🏽‍🎓</p>
      <div className="containerEducation">
      <h3 className="name">Máster Full Stack Development</h3>
      <h5 className="where">Upgrade Hub - 2022</h5>
      <h3 className="name">Máster UX/UI Design</h3>
      <h5 className="where">Talent Garden - 2019</h5>


      
      </div>
      <SocialMedia />

    </main>
  );
};

export default Aboutme;
