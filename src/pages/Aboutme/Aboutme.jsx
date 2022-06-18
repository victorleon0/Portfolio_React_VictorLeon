import "./Aboutme.scss";
import React from "react";
import SkillBar from 'react-skillbars';
import Sidebar from "../../components/Sidebar/Sidebar";
import CV from '../../CV/curriculum';
const { aboutMe, habilities } = CV;



const skills = [
  {type: "Java", level: 85},
  {type: "Javascript", level: 75},
];



//import { aboutMe, habilities } from "../../CV/curriculum.jsx";

const Aboutme = () => {


  return (
    <main className="aboutme">
    <Sidebar />
    <h2 className="title-projects">Sobre mí...</h2>
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
      <div className="containerSkills">
      
      </div>

    </main>
  );
};

export default Aboutme;
