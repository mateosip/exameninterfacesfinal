import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie.jsx';

import Styles from "./Styles.css";

const Aplicacion = (props) => {
    const [peliculas, setPeliculas] = useState("");
    const [pelicula, setPelicula] = useState(null);
    useEffect(() => {
        axios.get(`https://the-one-api.herokuapp.com/v1/movie`, { headers: { Authorization: `Bearer ${props.token}` } }).then((response) => {
            console.log(response);
            setPeliculas(response.data.docs);
        });
    }, []);
    return (
        <div className="lista">
            <div className="titulo">THE LORD OF THE RINGS</div>
            <div className="aplicacion">
            <div>
            {pelicula?(<Movie token={props.token} id = {pelicula}/>):null}
            </div>
            <div className="peliculas">
            {peliculas ? (peliculas.map(peli => {
                return (
                        <div key={peli._id} className="pelicula" onClick={() => setPelicula(peli._id)}>
                            <div className="listaPeliculas">
                                {peli.name}
                            </div>
                        </div>
                )
            })
            
            ) : null}
            </div>
            </div>

        </div>
    );
}
export default Aplicacion;
//{pelicula && pelicula!==peli._id ? (
//    <Movie token={props.token} id={peli._id} />
