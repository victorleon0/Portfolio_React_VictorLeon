import React, { useState } from 'react';
import './ProjectsDropdown.scss';


const ProjectsDropdown = ({ name, description, src }) => {
    const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='projectContainer'>
        <header className='header'>
            <h4 className='projectTitle'>{name}</h4>
            <img className='projectimage' src={src} ></img>
            <button className='info-btn' onClick={() => setShowInfo(!showInfo)}>leer más</button>
        </header>
        <div className="info">{ showInfo && <p className='info-show'>{description}</p> }</div>
    </article>
  )
}

export default ProjectsDropdown;