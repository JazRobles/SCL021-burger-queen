import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Enter = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <img src="/Assets/img/logo.png" className="logo" alt="" />
      </header>
      
      <div className="div-btn">
      <h1 className="titulo-enter">Bienvenidos a Burger Queen</h1>
           <h2 className="subtitulo-enter">Que sea un buen día</h2>
        <button className="btnmesero" onClick={() => navigate("/Menu")}>
          Mesero
        </button>
        <br></br>
        <button className="btncocina">Cocinero</button>
      </div>
    </>
  );
};

export default Enter;
