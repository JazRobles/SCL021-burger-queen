import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Enter from './Views/Enter';
import Menu from './Views/Menu';
import Cart from './Views/Cart';
import Cocina from "./Views/Cocina";
import './index.css';
import {Provider} from './contexts/Context';

function App() {
  
  
  return (

    
    <BrowserRouter>
<Provider>
<Routes>
<Route path="/" element={<Enter />} />
<Route path="/Menu" element={<Menu />} />
<Route path="/Cart" element={<Cart />} />
<Route path="/Cocina" element={<Cocina />} />
</Routes>
</Provider>
</BrowserRouter>

  );
}

export default App;



    