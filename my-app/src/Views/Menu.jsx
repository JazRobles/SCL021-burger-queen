import React, { useContext } from "react";
import "./styles.css";
import Context from "../contexts/Context";
import Add from "../components/Ad";
import NavBar from "../components/NavBar";

const Menu = () => {
  const { menus, addToCart } = useContext(Context);

  return (
    <>
      <header>
        <NavBar />
        <h1 className="tituloMenu">Menú</h1>
      </header>
      <div className="contenedor" style={{ display: "flex" }}>
        <div className="card-container">
          {menus.map((data) => {
            return (
              <div className="divgurger" key={data.id}>
                <img className="image" src={data.img} alt="" />
                <h3>{data.name}</h3>
                <p>${data.price}</p>
                <Add item={data} onClick={() => addToCart(data)} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
