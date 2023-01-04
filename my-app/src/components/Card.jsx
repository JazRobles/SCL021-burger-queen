import React from 'react'
import '../Views/styles.css';
import { useContext } from "react";
import Context from "../contexts/Context";

const Card = () => {

  const { menus} = useContext(Context);


return (
    <>

{/*<Link to={Card} className="btnLink">*/}

    <div className="card" key={menus}>
    
 
         <h2>Pedido</h2>
       <textarea placeholder='Mesa y Extras' className='texArea'></textarea>
       
       
         <button className='btnEliminar'>Eliminar</button>
       
        
         <button className='btnCocinar'>Cocinar</button>
  

    </div>

    {/*</Link>*/}

   
  </>  

  );
};




export default Card;