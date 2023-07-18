import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Context from "../contexts/Context";
import { formatNumber } from "../helpers";
import "../components/nav.css";

const NavBar = () => {
  const { cartItems } = useContext(Context);
  const total = cartItems.reduce(
    (previousValue, { quantity, price }) => previousValue + price * quantity,
    0
  );

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

  return (
    <nav>
      <ul>
        <li>
          <NavLink className={setActiveClass} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={setActiveClass} to="/menu">
            Menú
          </NavLink>
        </li>
        <li>
          <NavLink className={setActiveClass} to="/cart">
            Carrito🛒
          </NavLink>
        </li>
      </ul>
      <p>Total: ${formatNumber(total)}</p>
    </nav>
  );
};

export default NavBar;
