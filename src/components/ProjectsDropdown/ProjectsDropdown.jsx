import React, { useState } from 'react';


const ProjectsDropdown = ({ name, description }) => {
    const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='projectContainer'>
        <header>
            <h4 className='projectTitle'>{name}</h4>
            <button className='info-btn' onClick={() => setShowInfo(!showInfo)}>leer más</button>
        </header>
        <div className="info">{ showInfo && <p className='info-show'>{description}</p> }</div>
    </article>
  )
}

export default ProjectsDropdown;