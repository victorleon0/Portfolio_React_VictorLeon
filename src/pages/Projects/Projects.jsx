import './Projects.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState } from 'react';
import ProjectsDropdown from '../../components/ProjectsDropdown/ProjectsDropdown';
import CV from '../../CV/curriculum';
const { experience } = CV;


const Projects = () => {
  const [state, setState] = useState(CV)
  
  return (
    <main>
    
      <div className='container'>
      <Sidebar />
        <div className="title-container">
          <h2 className='title-projects'>Recent Projects</h2>
        </div>
        <section className='projects' onClick={() => setState(!state)}>
          {
            experience.map((experience) => {
              return <ProjectsDropdown key={experience.name} {...experience} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default Projects;