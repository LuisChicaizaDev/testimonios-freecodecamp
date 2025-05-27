import React from 'react';
import '../stylesheets/Testimonio.css';

/**
 * Creamos un componente de clase
 * Agregamos 'this' para acceder al objeto de propiedades
 */
class Testimonio extends React.Component {

  render() {
    return (
      //Contenedor principal
      <div className='contenedor-testimonio'>
        <img 
          className='img-testimonio'
          src={require(`../img/avatar-${this.props.imagen}.jpg`)} //con comillas invertidas
          alt= {`Avatar de ${this.props.alt}`}
        />

        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{this.props.nombre}</strong> en {this.props.pais}
          </p>
          <p className='cargo-testimonio'>
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>
            "{this.props.testimonio}"
          </p>
        </div>

      </div>
    );
  }

}

//exportamos el componente
export default Testimonio;