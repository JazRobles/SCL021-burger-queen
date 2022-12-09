import { createContext, useState, useEffect } from "react";

//se crea context para reutilizar la info del json y funcionalidades en varios componentes

const Context = createContext();

// se guarda info en el hook useState

const Provider = ({ children }) => {
  const [menus, setMenu] = useState([]);
 

  //extrae la data de json mediante fetch y guarda informacion con useEffect

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetch("./menu.json");
        const menus = await res.json();
        if (menus) {
          setMenu(menus);
        }
        //manejo de errores
        else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        // console.log("error en la solicitud", error)
       
      }
    };

    getMenu();
  }, []);

 

 

  console.log(menus);
  return (
    <Context.Provider
      value={{ menus}}
    >
      {children}
    </Context.Provider>
  );
  
};

// Export Provider (permite que los componentes consuman los datos)
export { Provider };

// Export Context
export default Context;