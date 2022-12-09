import React, { useState,Fragment } from "react";
import "../Views/styles.css";

const Contador = () => {

  const [numero, setNumero] = useState(0);

  const aumentar = ()=> {
    return setNumero(numero + 1)
  }
    
 const restar = ()=> {
  return setNumero(numero-1)
 }
  

 
  return (
   
      <Fragment>

   
         <div className="divCount">  
       
        <button
          className="btnMas"
          onClick={aumentar}
         >
          +
        </button>
        <h4 className="conteo">{numero}</h4>
    
        <button  className="btnMenos" onClick={restar}>-</button>
        </div> 
      </Fragment>
  );
}

export default Contador;