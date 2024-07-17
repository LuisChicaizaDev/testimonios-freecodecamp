import React from 'react';
import '../stylesheets/Testimonio.css';

/*
Creamos un componente funcional que recibirá 
propiedades 'props'
*/
function Testimonio(props){
  return (
    //Contenedor principal
    <div className='contenedor-testimonio'>
      <img 
        className='img-testimonio'
        src={require(`../img/avatar-${props.imagen}.jpg`)} //con comillas invertidas
        alt= {`Avatar de ${props.alt}`}
      />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>

    </div>

  );
}

//exportamos el componente
export default Testimonio;