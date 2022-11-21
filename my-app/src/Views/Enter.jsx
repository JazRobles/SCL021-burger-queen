import React from 'react';
//import logo from '../Assets/img/logo.png';
import { useNavigate } from "react-router-dom";
import './styles.css';


const Enter = () => {
  const navigate = useNavigate();
    return (
      
      <>
        <header>
         <img src='/Assets/img/logo.png'  className="logo" alt="" />
          
        </header>
    
    
      <div className='divibtn'>
      <button className='btnmesero' onClick={() => navigate("/Menu")}>Mesero</button>
      <br></br>
      <button className='btncocina'>Cocinero</button>
      </div>
         </>
        
         

    );
  };


  
  
  export default Enter;