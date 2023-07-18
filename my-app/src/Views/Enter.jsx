import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Enter = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="conteiner-enter">
      <header>
        <img src="" className="logo" alt="" />
      </header>

      <div className="div-btn">
        <h1 className="titulo-enter">Bienvenidos a Burger Queen</h1>
        <h2 className="subtitulo-enter">Que sea un buen día</h2>
<div className="contenedor-btns">
        <button className="btnmesero" onClick={() => navigate("/Menu")}>
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">Mesero</span>
        </button>

        <br></br>
        <button className="btncocina"  onClick={() => navigate("/Cocina")}>
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">Cocinero</span>
        </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Enter;
