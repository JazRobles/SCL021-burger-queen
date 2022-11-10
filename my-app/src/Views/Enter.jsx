import React from 'react';
import logo from '../Assets/img/logo.png';
import { useNavigate } from "react-router-dom";


const Enter = () => {
  const navigate = useNavigate();
    return (
      
      <>
        <header>
          <img src={logo}  className="logo" alt="" />
          
        </header>
       
      <div>
      <button onClick={() => navigate("/Menu")}>Mesero</button>
      <br></br>
      <button>Cocinero</button>
      </div>
         </>
        
         

    );
  };


  
  
  export default Enter;