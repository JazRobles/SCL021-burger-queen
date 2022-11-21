import React from "react";
import "./styles.css";
import Data from "../menu.json";
import Card from "../components/Card";
import Boton from "../components/Button";

export default function Menu() {
  return (
    <>
      <header>
        <h1 className="tituloMenu">Menu</h1>
      </header>
      <div className="contenedor" style={{ display: "flex" }}>
        <Card />
        <div className="card-container">
          {
            Data.map((post) => {
              return (
                <div className="divgurger" key={post.id}>
                  <img className="image" src={post.img} alt="" />
                  <h3>{post.name}</h3>
                  <p>${post.price}</p>
                  <Boton />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
