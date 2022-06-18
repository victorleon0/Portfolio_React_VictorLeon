import "./Aboutme.scss";
import React from "react";
//import HeroCard from "../../components/Hero/HeroCard.jsx";
import CV from '../../CV/curriculum';
const { aboutMe, habilities } = CV;

//import { aboutMe, habilities } from "../../CV/curriculum.jsx";

const Aboutme = () => {


  return (
    <main className="aboutme">
      <div className="containerAboutme">
        <div className="title">
          <h2 className="title-projects">Sobre mí...</h2>
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

            <div className="cardBack">
              <h2>Habilidades</h2>
              <p>{habilities} </p>
              <p>
                📧
                <a href={"mailto:" + aboutMe.email}>
                  victor.leon.huerta@gmail.com
                </a>
              </p>
              <p>📱 {aboutMe.phone}</p>
              <p>
                💾<a href={aboutMe.gitHub}></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aboutme;
