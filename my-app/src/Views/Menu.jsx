import React from "react";
import "./styles.css";
//import Data from "../menu.json";
import Card from "../components/Card";
import { useContext } from "react";
import Context from "../contexts/Context";

const Menu=() => {

  const { menus} = useContext(Context);


  return (
    <>
      <header>
        <h1 className="tituloMenu">Menu</h1>
      </header>
      <div className="contenedor" style={{ display: "flex" }}>
        <Card />
        <div className="card-container">
          {menus.map((data) => {
            return (
              <button className="divgurger" key={data.id}>
              
                <img className="image" src={data.img} alt="" />
                <h3>{data.name}</h3>
                <p>${data.price}</p>
                </button>
              
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;