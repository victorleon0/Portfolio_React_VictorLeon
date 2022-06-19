import './Projects.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
//import { useState } from 'react';
//import ProjectsDropdown from '../../components/ProjectsDropdown/ProjectsDropdown';
//import CV from '../../CV/curriculum';
import SocialMedia from '../../components/SocialMedia/SocialMedia';



const Projects = () => {
 
  
  return (
    <main>
    
      <div className='container'>
      <Sidebar />
        
        <div className='container_projects'>
        <a href="https://victorleondesign.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >
          <div id="project">
            <img id="image" src="https://victorleondesign.com/wp-content/uploads/2021/09/Promo-Nuevo-CJ.png" alt="" />
            <div id="hover">
              <h3>DESIGN MANAGER AT NIW.ES</h3>
              <p>RESEARCH Y CREACIÓN DE UN NUEVO CUSTOMER JOURNEY CON EL MÉTODO DESIGN THINKING, GUERRILLA TESTING, ENTREVISTAS CUALITATIVAS Y CUANTITATIVAS, DISEÑO GRÁFICO, DISEÑO DE CREATIVIDADES SOCIAL & DISPLAY, GRABACIÓN Y EDICIÓN DE VÍDEO.
USO DE HERRAMIENTAS DE DISEÑO DE ADOBE, XD, ILLUSTRATOR, AFTER EFFECTS, PREMIERE Y PHOTOSHOP</p>
            </div>
          </div>
          </a>

          <a href="https://victorleondesign.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >
          <div id="project">
            <img id="image" src="http://victorleondesign.com/wp-content/uploads/2021/08/Renfe-Piensa-en-ti%CC%81-4.png" alt="" />
            <div id="hover">
              <h3>GANADOR 1º HACKATON RENFE</h3>
              <p>RENFE POR TI’ ES EL PROYECTO GANADOR DE UNA COMPETICIÓN EN LA QUE HAN PARTICIPADO TREINTA DESARROLLADORES PARA PRESENTAR A RENFE PROPUESTAS QUE MEJOREN LA EXPERIENCIA DEL CLIENTE EN UN ENCUENTRO ORGANIZADO POR TRENLAB, WAYRA Y TALENT GARDEN. EL HACKATHON TUVO LUGAR ENTRE MADRID Y BARCELONA, LLEVÁNDOSE A CABO EN LOS VAGONES DE UN AVE PARA LOGRAR LA MAYOR INSPIRACIÓN DE LOS DESARROLLADORES. ‘RENFE POR TI’ HA SIDO LA PROPUESTA GANADORA, UN SISTEMA PARA SIMPLIFICAR, MEJORAR Y AUMENTAR EL USO DE CANALES DIGITALES DE RENFE.</p>
            </div>
          </div>
          </a>

          <a href="https://victorleondesign.com/#:~:text=VER%20NOTICIA%20COMPLETA" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >
          <div id="project">
            <img id="image" src="https://victorleondesign.com/wp-content/uploads/2021/08/ey1.png" alt="" />
            <div id="hover">
              <h3>EY – BLOCKCHAIN</h3>
              <p>ERNST AND YOUNG, UNA FIRMA MULTINACIONAL DE SERVICIOS PROFESIONALES, RECIENTEMENTE HA INGRESADO AL MUNDO DE LAS SOLUCIONES BLOCKCHAIN. CON ESTA SOLUCIÓN, TODAS LAS EMPRESAS INVOLUCRADAS EN UNA OPERACIÓN LOGÍSTICA PODRÁN VER UN HISTORIAL DIGITAL DE TRANSACCIONES Y, DEBIDO A LA NATURALEZA DE BLOCKCHAIN, SE ASEGURARÁN CONSTANTEMENTE DE QUE NO SE HAYAN MODIFICADO NI FALSIFICADO REGISTROS. EN GENERAL, ESTÁN HACIENDO GRANDES PROGRESOS EN EL CAMPO, PERO AHORA NECESITAN AYUDA DESDE LA PERSPECTIVA DE LA EXPERIENCIA DEL USUARIO PARA ASEGURARSE DE QUE SU SOLUCIÓN SEA INTUITIVA Y FÁCIL DE USAR PARA LOS CONDUCTORES, TRANSPORTISTAS Y OTRAS PERSONAS INVOLUCRADAS EN EL PROCESO.</p>
            </div>
          </div>
          </a>

          
        </div>
        
        <SocialMedia />

      </div>
    </main>
  );
}

export default Projects;