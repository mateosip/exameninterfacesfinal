import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from "./Styles.css";

const Navegador = (props) => {
    const [numeroPagina, setNumeroPagina] = useState(0);
    const setSiguiente = () => {
        if (numeroPagina < 237) {
            props.setNumeroMenor(props.numeroMenor + 10);
            props.setNumeroMayor(props.numeroMayor + 10);
            setNumeroPagina(numeroPagina + 1);
        }

    }
    const setAnterior = () => {
        if (numeroPagina > 0) {
            props.setNumeroMenor(props.numeroMenor - 10);
            props.setNumeroMayor(props.numeroMayor - 10);
            setNumeroPagina(numeroPagina - 1);
        }

    }
    const setPrimera = () => {
        props.setNumeroMenor(0);
        props.setNumeroMayor(10);
        setNumeroPagina(0);
    }
    const setUltima = () => {
        props.setNumeroMenor(2300);
        props.setNumeroMayor(2379);
        setNumeroPagina(237);
    }
    return (
        <div className="Navegador">
            <p>Pagina actual : {numeroPagina}/237</p>
            <button className="paginasiguiente" onClick={() => setSiguiente()}>Next</button>
            <button className="paginaanterior" onClick={() => setAnterior()}>Back</button>
            <button className="primerapagina" onClick={() => setPrimera()}>Primera</button>
            <button className="ultimapagina" onClick={() => setUltima()}>Ultima</button>
        </div>
    );
}
export default Navegador;
