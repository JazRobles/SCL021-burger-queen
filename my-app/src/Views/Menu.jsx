import React from 'react';
import './styles.css';
import image from '../Assets/img/burgerxx.png'
import papas from '../Assets/img/papas.png'
import { Link } from "react-router-dom";
const Menu = () => {
    return (
      <>
  
      <Link to={image} className="btnLink">
      <div className="divgurger">
      <img src={image}  className="image" alt="" />
      <div className='h3menu'><h3>Hamburguesa doble</h3>
      </div>
      </div>    
      </Link> 
   
      <div className="div-papas">
      <img src={papas}  className="img-papas" alt="" />
      <div className='h3papas'><h3>Papas Fritas </h3>
      </div>    
       
      </div>
      
    </>  

    );
  };


  
  
  export default Menu;