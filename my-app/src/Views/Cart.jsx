import React, { useContext } from "react";
import "../Views/Cart.css";
import NavBar from "../components/NavBar";
import Context from "../contexts/Context";
import { formatNumber } from "../helpers";
import { NavLink } from "react-router-dom";
import { fireData } from "../firebase/firestore";

const Cart = (item) => {
  const { cartItems, incrementQuantity, decrementQuantity,removeItem } = useContext(Context);

  const handleRemove = () => {
    removeItem(item.id);
  };
  const total = cartItems.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  const sendOrder = () => {
    //aqui se ejecuta fireData
    fireData({ cartItems })
      .then()
      .catch((error) => console.log(error));
    console.log("Enviar pedido");
    console.log(fireData)
  };

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

  return (
    <>
      <NavBar />
      <div className="cart-container">
        <div className="cart-details">
          <h5>Detalles del pedido:</h5>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.img} alt="" className="item-image" />
                  <div className="item-text">
                    <h6 className="item-name">{item.name}</h6>
                    <p className="item-price">${formatNumber(item.price)}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="item-action" onClick={() => decrementQuantity(item.id)}>
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button className="item-action" onClick={() => incrementQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h2 className="cart-total">Total: ${formatNumber(total)}</h2>

          <NavLink className={setActiveClass} to="/Cocina">
          <button className="cart-button" onClick={sendOrder}>
            Ir a Pagar
          </button>
         
          </NavLink>
         
         
          <button className="btnEliminar" onClick={() => handleRemove(item.id)}>
        Eliminar
      </button>
        </div>
      </div>
      <NavLink className={setActiveClass} to="/Cocina">
            <h1 className="ir-cocina">ir a Cocina➡️</h1> 
          </NavLink>
    </>
  );
};

export default Cart;