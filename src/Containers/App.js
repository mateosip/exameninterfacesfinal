import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Components/Movie.jsx';
import Inicio from "../Components/Inicio.jsx";
import Aplicacion from "../Components/Aplicacion.jsx";
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [bookNumber, setBookNumber] = useState("");
  const [informacion, setInformacion] = useState("");

  return (
    <div className="App">
      {!token ? (
        <div>
            <Inicio setToken={setToken} />
        </div>
      ) : <Aplicacion token={token} />}
    </div>

  );
}
//5cf5805fb53e011a64671582

export default App;
//PMugwsljtCmJi23cbCeR ESTE ES MI TOKEN
