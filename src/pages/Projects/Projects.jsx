import { useState } from 'react';
import ProjectsDropdown from '../../components/ProjectsDropdown/ProjectsDropdown';
import CV from '../../CV/curriculum';
const { experience } = CV;

const Projects = () => {
  const [state, setState] = useState(CV)

  return (
    <main>
      <div className='container'>
        <div className="title">
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