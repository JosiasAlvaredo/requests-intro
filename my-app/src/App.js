import React, { useState } from 'react';
import './App.css';

function App() {
  const [pais, setPais] = useState('');
  const [informacion, setInformacion] = useState({});

  const handleChange = (e) => {
    setPais(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/alpha/${pais}`)
      .then((response) => response.json())
      .then((data) => setInformacion(data[0]))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            className= "input-field"
            type="text"
            value={pais}
            onChange={handleChange}
            placeholder="Ingrese el código de un país"
          />
          <button type="submit">Enviar</button>
        </form>
        {informacion.name && (
          <div>
            <h2>{informacion.name.common}</h2>
            <p>Capital: {informacion.capital[0]}</p>
            <p>Población: {informacion.population}</p>
            <p>Región: {informacion.region}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;