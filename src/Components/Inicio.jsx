import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from "./Styles.css";

const Inicio = (props) => {
    const [falla, setFalla] = useState(false);
    const comprobarToken = (token) => {
        if (token !== "PMugwsljtCmJi23cbCeR") {
            setFalla(true);
        }
    }
    return (
        <div className="Inicio">
            {!falla ? (
                <div>
                    <input type="text" name="entrar" id="entrar" placeholder="token" />
                    <button onClick={() => comprobarToken(document.getElementById("entrar").value)}>Check</button>
                    <button onClick={() => props.setToken(document.getElementById("entrar").value)}>ENTRAR</button>
                </div>
            ) : <div>
                    ERROR.
            <a href="https://the-one-api.herokuapp.com/sign-up">REGISTER</a>
                </div>}


        </div>
    )
}
export default Inicio;
