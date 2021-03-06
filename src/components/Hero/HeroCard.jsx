import React from "react";
import "./hero.scss";

//import { aboutMe } from "./CV/curriculum";

const HeroCard = ({ aboutMe, habilities }) => {
  return (
    <div className="hero">
      <img src={aboutMe.image} alt="" />
      <div className="card">
        <h2>
          {aboutMe.name} {aboutMe.adress}
        </h2>
        <p>πΊοΈ{aboutMe.city} </p>
        <p>ποΈ{aboutMe.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + aboutMe.email}>victor.leon.huerta@gmail.com</a>
        </p>
        <p>π± {aboutMe.phone}</p>
        <p>
          πΎ<a href={aboutMe.gitHub}>GitHub</a>
        </p>
      </div>

      <div className="cardBack">
        <h2>Habilidades</h2>
        <p>{habilities} </p>
        <p>
          π§
          <a href={"mailto:" + aboutMe.email}>victor.leon.huerta@gmail.com</a>
        </p>
        <p>π± {aboutMe.phone}</p>
        <p>
          πΎ<a href={aboutMe.gitHub}></a>
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
