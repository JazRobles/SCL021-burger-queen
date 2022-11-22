import React from 'react'
import '../Views/styles.css';
import { Link } from "react-router-dom";

const Card = () => {
return (
    <>

{/*<Link to={Card} className="btnLink">*/}
    <div className="card">
         <h2>Pedido</h2>
       <textarea placeholder='Mesa y Extras' className='texArea'></textarea>
         <div className='divCentro'>
         <button className='btnEliminar'>Eliminar</button>
         </div>
         <button className='btnCocinar'>Cocinar</button>
    </div>

    {/*</Link>*/}

   
  </>  

  );
};




export default Card;