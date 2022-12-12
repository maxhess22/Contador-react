import "../index.css"


function Boton({nombre ,borrar, metodo}){
    return(
        <button className={ borrar?" button button-borrar":"button button-click"} 
        borrar={borrar}
        onClick={metodo}
        >
            {nombre}
        </button>
    );
}

export default Boton;