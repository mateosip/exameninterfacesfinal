import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navegador from './Navegador.jsx';
import Styles from "./Styles.css";

const Movie = (props) => {
  const [citas, setCitas] = useState(null);
  const [numeroMenor, setNumeroMenor] = useState(0);
  const [numeroMayor, setNumeroMayor] = useState(10);
  useEffect(() => {
    axios.get(`https://the-one-api.herokuapp.com/v1/quote`, { headers: { Authorization: `Bearer ${props.token}` } }).then((response) => {
      console.log(response);
      setCitas(response.data.docs.splice(numeroMenor, numeroMayor));
    });
  }, [numeroMenor]);
  return (
    <div>
      <div className="movie">
        {citas ? (
          citas.map(cita => {
            return (
              <div key={cita._id}>
                {cita.movie === props.id ? (
                  cita.dialog
                ) : null}
              </div>
            );
          })
        ) : null}

      </div>
      <Navegador numeroMenor={numeroMenor} setNumeroMenor={setNumeroMenor} numeroMayor={numeroMayor} setNumeroMayor={setNumeroMayor} />
    </div>
  );
}
export default Movie;