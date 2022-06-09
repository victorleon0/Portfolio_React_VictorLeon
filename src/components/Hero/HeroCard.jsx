import React from "react";
import "./hero.scss";

import { aboutMe } from "./CV/curriculum";


const HeroCard = ({ aboutMe }) => {
  return (
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
          tony@starkindustries.com
          </a>
        </p>
        <p>📱 {aboutMe.phone}</p>
        <p>💾<a href={aboutMe.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default HeroCard;