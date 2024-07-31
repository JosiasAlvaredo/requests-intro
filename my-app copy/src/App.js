import React, { useState } from 'react';
import './App.css';
import User from './User';

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