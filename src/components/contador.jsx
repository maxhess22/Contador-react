import React from "react";
import "../index.css"

function Contador({valor, clase}){
    return (
        <div className={clase}>
            <h1>
                {valor}
            </h1>
        </div>
    );
}

export default Contador;