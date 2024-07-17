import './App.css';
//importamos el componente
import Testimonio from './components/Testimonio'; //ó Testimonio.js
import testimoniosData from './components/testimoniosData'; // importamos la data

function App() {
  /**
   * Renderiza una lista de los testimonios utilizando el componente Testimonio.
   * Cada testimonio es mapeado desde el array 'testimoniosData'.
   */
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que nuestros exalumnos dicen sobre freeCodeCamp:</h1>
        
        
        {testimoniosData.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            alt={testimonio.alt}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
