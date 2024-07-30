import React, { useState } from 'react';
import './App.css';

const User = ({ user }) => {
  return (
    <div>
      <h2>Usuario aleatorio</h2>
      <p>Nombre: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Imagen: <img src={user.picture.medium} alt="Imagen de usuario" /></p>
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const getRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getRandomUser}>Obtener usuario random</button>
        {user && <User user={user} />}
      </header>
    </div>
  );
}

export default App;