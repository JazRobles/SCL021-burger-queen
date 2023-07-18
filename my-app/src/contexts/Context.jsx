import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [menus, setMenu] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetch("./menu.json");
        const menus = await res.json();
        if (menus) {
          setMenu(menus);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log("error en la solicitud", error);
      }
    };

    getMenu();
  }, []);

  const addToCart = (item) => {
    const { img, name, price } = item;
    const newItem = { id: cartItems.length + 1, img, name, price, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <Context.Provider
      value={{
        menus,
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Provider };
export default Context;
