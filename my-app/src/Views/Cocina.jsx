import React, { useEffect, useState } from "react";
import { traeData } from "../firebase/firestore";
import { NavLink } from "react-router-dom";
import "../Views/Cocina.css";

//hasta aqui se ve el pedido confirmado pero solo en consola, se debe trabajar para mostrarlo
//en la vista de cocina
const Cocina = () => {
  const [newOrder, setnewOrder] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await traeData();
      console.log(data);
      setnewOrder(data);
    }
    getData();
  }, []);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <>

       <NavLink className={setActiveClass} to="/cart">
            <h1 className="flecha">Volver⬅️</h1>
          </NavLink>
      <div className="div-container">
        <div className="order-list">
         
            <h1 className="letra-detalle">Detalles del pedido:</h1>

            <div className="div-class">
              {newOrder.map((order, index) => (
                <div className="order-div">
                  <h6 >Orden {index + 1}</h6>
                  <table>
                    {order.cartItems.map((item) => (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              ))}
            </div>
          </div>
       
      </div>
    </>
  );
};

export default Cocina;