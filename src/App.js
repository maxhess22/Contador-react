import Contador from "./components/contador";
import Boton from "./components/boton";
import React from "react";

function App() {
  let [valor, setValor] = React.useState(0);
  if(valor<0){
    setValor(0)
  }
  return (
    <div className="App">
      <h1 className="Title">Counter clicks</h1>
      <Contador clase="contador" valor={valor} />
      <div className="botones">
        <Boton nombre="Sumar" metodo={()=>setValor(valor +1)}></Boton>
        <Boton nombre="Restar"metodo={()=>setValor(valor-1)} ></Boton>
        <Boton nombre="Borrar" borrar={true} metodo={()=>setValor(0)} ></Boton>
      </div>
    </div>
  );
}

export default App;
