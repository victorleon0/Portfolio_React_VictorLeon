import React from 'react'

const ContactForm = (props) => {

    const submitForm = (event) => {
        event.preventDefault(); // poner siempre en un evento submit
        
        const usersData = {
          nombre: event.target.nombre.value,
          apellidos: event.target.apellido.value,
          email: event.target.email.value,
          comentarios: event.target.comentarios.value,
        };
        
    
        // al estar DEFINIDA en el padre, el resultado cuando la invoquemos
        // lo veremos en el lugar donde está definida.
        props.getContact(usersData);
        event.target.reset();
      };
    

  return (
    <form onSubmit={submitForm}>
    <h3>¿Te puedo ayudar?</h3>
    <p>Déjame tu nombre</p>
    <input type="text" name="nombre" placeholder="Nombre" className="userName"></input>
    <p>tu apellido</p>
    <input type="text" name="apellido" placeholder="Apellido" className="userSurname"></input>
    <p>y tu email.</p>
    <input type="text" name="email" placeholder="email" className="userEmail"></input>
    <p>Cuéntame que necesitas</p>
    <input type="text" name="comentarios" className="comentarios"></input>
    <button type="submit" className="submitButton">Enviar</button>
    </form>
  )
};

export default ContactForm